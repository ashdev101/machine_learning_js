import * as tf from '@tensorflow/tfjs';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

// Type definitions
type WordIndex = { [key: string]: number };

// Sample Data
const reviews: string[] = [
  "The hostel was good but the toilet was not clean",
  "Great stay, very clean facilities",
  "Unhygienic food served at dinner"
];
const labelsSentiment: number[] = [1, 1, 0]; // 1: good, 0: bad
const labelsDepartment: number[] = [0, 1, 0]; // Example department labels
const departments: string[] = ["Operations", "Food and Beverage"];

// Tokenizer - Tokenizes by splitting by space and lowercasing words aka split the reviews arr to unique words vocabulary and by also sanitizing it .
const createWordIndex = (reviews: string[]): WordIndex => {
  const wordIndex: WordIndex = {};
  let index = 1;

  reviews.forEach(review => {
    const words = review.toLowerCase().split(/\s+/);
    words.forEach(word => {
      if (!wordIndex[word]) {
        wordIndex[word] = index++;
      }
    });
  });

  return wordIndex;
};

// Convert sentences to sequences of integers which represents the sentence with the corresponding word according to the wordIndex vocabulary
const textToSequences = (wordIndex: WordIndex, reviews: string[]): number[][] => {
  return reviews.map(review => {
    return review.toLowerCase().split(/\s+/).map(word => wordIndex[word] || 0);
  });
};

// Padding sequences
const padSequences = (sequences: number[][], maxLen: number): number[][] => {
  return sequences.map(seq => {
    const padded = new Array(maxLen).fill(0);
    return seq.slice(0, maxLen).concat(padded.slice(seq.length));
  });
};

// Set a constant maxLen for padding (e.g., 10)
const maxLen = 10; // This should match the inputLength used in the embedding layer

// Preprocess reviews for the model with a fixed maxLen
const preprocessReviews = (wordIndex: WordIndex, reviews: string[], maxLen: number): number[][] => {
  const sequences = textToSequences(wordIndex, reviews);
  return padSequences(sequences, maxLen); // Pad sequences to the fixed length
};

// Create a simple NLP model
const createModel = (numDepartments: number): tf.LayersModel => {
  const input = tf.input({ shape: [10] });

  // Embedding layer: inputDim is the vocabulary size, outputDim is the embedding size, and inputLength is the padded sequence length
  const embedding = tf.layers.embedding({ inputDim: 1000, outputDim: 128, inputLength: 10 }).apply(input);

  // LSTM layers
  const lstm = tf.layers.lstm({ units: 64, returnSequences: true }).apply(embedding);
  const lstm2 = tf.layers.lstm({ units: 32 }).apply(lstm);

  // Output for sentiment classification (good/bad)
  const sentimentOutput = tf.layers.dense({ units: 2, activation: 'softmax', name: 'sentimentOutput' }).apply(lstm2) as tf.SymbolicTensor;

  // Output for department classification
  const departmentOutput = tf.layers.dense({ units: numDepartments, activation: 'softmax', name: 'departmentOutput' }).apply(lstm2) as tf.SymbolicTensor;

  const model = tf.model({
    inputs: input,
    outputs: [sentimentOutput, departmentOutput]
  });

  model.compile({
    optimizer: 'adam',
    loss: {
      sentimentOutput: 'sparseCategoricalCrossentropy',
      departmentOutput: 'sparseCategoricalCrossentropy'
    },
    metrics: ['accuracy']
  });

  return model;
};


// Train the model
const trainModel = async (
  model: tf.LayersModel,
  X: tf.Tensor2D,
  ySentiment: tf.Tensor1D,
  yDepartment: tf.Tensor1D
): Promise<void> => {
  // Ensure input tensors are in the right data type
  const XFloat = X.cast('float32');
  const ySentimentFloat = ySentiment.cast('float32');
  const yDepartmentFloat = yDepartment.cast('float32');

  // Train the model
  await model.fit(XFloat, { sentimentOutput: ySentimentFloat, departmentOutput: yDepartmentFloat }, {
    epochs: 10,
    batchSize: 32,
    shuffle: true
  });
};

// // Create server
// const app = express();
// app.use(bodyParser.json());

// Tokenize the reviews
const wordIndex: WordIndex = createWordIndex(reviews);

// Preprocess input reviews
const X = preprocessReviews(wordIndex, reviews, maxLen);

// Convert to tensors
const XTensor = tf.tensor2d(X);
const ySentimentTensor = tf.tensor1d(labelsSentiment, 'float32');
const yDepartmentTensor = tf.tensor1d(labelsDepartment, 'float32');

// Create the model
const model = createModel(departments.length);

const trainModelfn = async()=>{
  // Train the model
await trainModel(model, XTensor, ySentimentTensor, yDepartmentTensor)
}



const test = async () => {

  await trainModelfn();
  // Test the model
  const reviewsToPredict = [
    "The hostel was fantastic",
    "Very bad experience with the food"
  ];

const wordIndex: WordIndex = createWordIndex(reviewsToPredict);

  // Preprocess the incoming reviews
  const XTest = preprocessReviews(wordIndex, reviewsToPredict, maxLen);
  const XTestTensor = tf.tensor2d(XTest);

  // Make predictions
  const [sentimentPredictions, departmentPredictions] = model.predict(XTestTensor) as [tf.Tensor, tf.Tensor];

  // Process predictions
  const sentimentResults = await sentimentPredictions.array() as number[][];
  const departmentResults = await departmentPredictions.array() as number[][];

  // Convert results to readable format
  const formattedResults = reviewsToPredict.map((review, index) => ({
    review,
    sentiment: sentimentResults[index], // Here, sentiment is now correctly typed
    department: departmentResults[index] // And here too
  }));

  console.log(formattedResults);
};

// Call the test function
test().catch(err => console.error('Error during testing:', err));


