import * as tf from "@tensorflow/tfjs";
import {
  swappedCombined,
  swappedCombinedResult,
  wordIndexCreated,
} from "./playtest";

// Type definitions
type WordIndex = { [key: string]: number };

// Sample Data
const reviews: string[] = swappedCombined;
const labelsDepartment: number[] = swappedCombinedResult; // Example department labels
const departments: string[] = ["Ops", "Ops/HR"];

// Tokenizer - Tokenizes by splitting by space and lowercasing words
const wordIndex: WordIndex = wordIndexCreated;
const createWordIndex = (
  reviews: string[],
  existingWordIndex: WordIndex = wordIndex
): WordIndex => {
  let index = Object.keys(existingWordIndex).length + 1; // Start index after from the last word index in the existingWordIndex

  reviews.forEach((review) => {
    const words = review.toLowerCase().split(/\s+/);
    words.forEach((word) => {
      if (!existingWordIndex[word]) {
        existingWordIndex[word] = index++;
      }
    });
  });

  return existingWordIndex;
};

// Convert sentences to sequences of integers representing word indices
const textToSequences = (
  wordIndex: WordIndex,
  reviews: string[]
): number[][] => {
  return reviews.map((review) => {
    return review
      .toLowerCase()
      .split(/\s+/)
      .map((word) => wordIndex[word] || 0);
  });
};

// Padding sequences
const padSequences = (sequences: number[][], maxLen: number): number[][] => {
  return sequences.map((seq) => {
    const padded = new Array(maxLen).fill(0);
    return seq.slice(0, maxLen).concat(padded.slice(seq.length));
  });
};

// Set a constant maxLen for padding (e.g., 20)
const maxLen = 20; // This should match the inputLength used in the embedding layer

// Preprocess reviews for the model
const preprocessReviews = (
  wordIndex: WordIndex,
  reviews: string[],
  maxLen: number
): number[][] => {
  const sequences = textToSequences(wordIndex, reviews);
  return padSequences(sequences, maxLen);
};

// Create a simple NLP model
const createModel = (numDepartments: number): tf.LayersModel => {
  const input = tf.input({ shape: [20] });

  // Embedding layer
  const embedding = tf.layers
    .embedding({ inputDim: 1000, outputDim: 128, inputLength: 20 })
    .apply(input);

  // LSTM layers
  const lstm = tf.layers
    .lstm({ units: 64, returnSequences: true })
    .apply(embedding);
  const lstm2 = tf.layers.lstm({ units: 32 }).apply(lstm);

  // Output for department classification
  const departmentOutput = tf.layers
    .dense({
      units: numDepartments,
      activation: "softmax",
      name: "departmentOutput",
    })
    .apply(lstm2) as tf.SymbolicTensor;

  const model = tf.model({
    inputs: input,
    outputs: departmentOutput,
  });

  model.compile({
    optimizer: "adam",
    loss: {
      departmentOutput: "sparseCategoricalCrossentropy",
    },
    metrics: ["accuracy"],
  });

  return model;
};

// Train the model
const trainModel = async (
  model: tf.LayersModel,
  X: tf.Tensor2D,
  yDepartment: tf.Tensor1D
): Promise<void> => {
  const XFloat = X.cast("float32");
  const yDepartmentFloat = yDepartment.cast("float32");

  console.log("Training model...");
  await model.fit(
    XFloat,
    { departmentOutput: yDepartmentFloat },
    {
      epochs: 10,
      batchSize: 10,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(
            `Epoch ${epoch}: loss = ${logs?.loss}, accuracy = ${logs?.departmentOutput_acc}`
          );
        },
      },
    }
  );
  console.log("Model trained successfully");
  console.log("Model Summary :", model.summary());
};

// Tokenize the reviews
const wordIndexTest: WordIndex = createWordIndex(reviews);

// Preprocess input reviews
const X = preprocessReviews(wordIndexTest, reviews, maxLen);

// Convert to tensors
const XTensor = tf.tensor2d(X);
const yDepartmentTensor = tf.tensor1d(labelsDepartment, "float32");

// Create the model
const model = createModel(departments.length);

// Train the model once
const trainModelfn = async () => {
  await trainModel(model, XTensor, yDepartmentTensor);
};

// Test the model with new reviews
const test = async () => {
  const reviewsToPredict = [
    "The wait time was horrendous, leaving us frustrated",
    "The tables were dirty, which made the whole experience less enjoyable",
    "staff members were not cooperative at all",
    "stink coming from the kitchen",
    "horrendous conditions of the dining area",
    "the food was terrible and did not meet our expectations",
  ];

  // Tokenize and preprocess new reviews
  const wordIndexForTest: WordIndex = createWordIndex(reviewsToPredict);
  const XTest = preprocessReviews(wordIndexForTest, reviewsToPredict, maxLen);
  console.log("XTest", XTest);
  // Convert to tensors
  const XTestTensor = tf.tensor2d(XTest);
  console.log("XTestTensor", XTestTensor);

  // Make predictions
  const departmentPredictions = model.predict(XTestTensor) as tf.Tensor;

  // Process predictions
  const departmentResults = (await departmentPredictions.array()) as number[][];

  // Convert results to readable format
  const formattedResults = reviewsToPredict.map((review, index) => ({
    review,
    department: departmentResults[index],
  }));

  console.log(formattedResults);
  console.log(JSON.stringify(wordIndexForTest, null, 2));
};

// Call the training function and then test the model
trainModelfn()
  .then(() => test())
  .catch((err) => console.error("Error during training or testing:", err));

// test();
