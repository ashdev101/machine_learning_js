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

// Tokenizer - Tokenizes by splitting by space and lowercasing words
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

// Convert sentences to sequences of integers
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

// Preprocess reviews for the model
const preprocessReviews = (wordIndex: WordIndex, reviews: string[], maxLen: number): number[][] => {
  const sequences = textToSequences(wordIndex, reviews);
  return padSequences(sequences, maxLen);
};

// Create a simple NLP model
const createModel = (numDepartments: number, maxLen: number): tf.LayersModel => {
  const input = tf.input({ shape: [maxLen] });

  // Embedding layer: inputDim is the vocabulary size, outputDim is the embedding size, and inputLength is the padded sequence length
  const embedding = tf.layers.embedding({ inputDim: 1000, outputDim: 128, inputLength: maxLen }).apply(input);

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
  // Ensure the inputs are cast to the right type (float32 for the input features)
  const XFloat = X.cast('float32'); // Input should be float32
  const ySentimentInt = ySentiment.cast('int32'); // Labels should remain int32
  const yDepartmentInt = yDepartment.cast('int32'); // Labels should remain int32

  // Train the model
  await model.fit(XFloat, { sentimentOutput: ySentimentInt, departmentOutput: yDepartmentInt }, {
    epochs: 10,
    batchSize: 32,
    shuffle: true
  });
};

// Set a constant maxLen for padding (e.g., 10)
const maxLen = 10; // This should match the inputLength used in the embedding layer

// Create server
const app = express();
app.use(bodyParser.json());

// Tokenize the reviews
const wordIndex: WordIndex = createWordIndex(reviews);

// Preprocess input reviews (with fixed maxLen)
const X = preprocessReviews(wordIndex, reviews, maxLen);

// Convert to tensors
const XTensor = tf.tensor2d(X, [X.length, maxLen]); // Correct dimensions for 2D tensor
const ySentimentTensor = tf.tensor1d(labelsSentiment, 'int32'); // Cast labels to int32
const yDepartmentTensor = tf.tensor1d(labelsDepartment, 'int32'); // Cast labels to int32

// Create the model
const model = createModel(departments.length, maxLen);

// Train the model
trainModel(model, XTensor, ySentimentTensor, yDepartmentTensor).then(() => {
  console.log("Model trained successfully");

  // Test the model after training
  const review: string = "Unhygienic food served at dinner";

  // Preprocess the incoming review
  const preprocessedReview = preprocessReviews(wordIndex, [review], maxLen);
  const preprocessedTensor = tf.tensor2d(preprocessedReview, [1, maxLen]).cast('float32'); // Cast to float32

  // Predict sentiment and department
  const predictions = model.predict(preprocessedTensor) as tf.Tensor[];

  // Extract predictions
  const sentimentPrediction = tf.argMax(predictions[0], 1).dataSync()[0];
  const departmentPrediction = tf.argMax(predictions[1], 1).dataSync()[0];

  console.log("Sentiment Prediction:", sentimentPrediction === 1 ? "Good" : "Bad");
  console.log("Department Prediction:", departments[departmentPrediction]);

}).catch(err => console.error('Error during training:', err));

// Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
