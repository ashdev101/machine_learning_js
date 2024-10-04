import { encode, decode, encodeGenerator } from "gpt-tokenizer";
import * as tf from "@tensorflow/tfjs"; // Ensure you have the TensorFlow.js library

// Function to get embeddings
async function getEmbeddings(word: string): Promise<number[]> {
  return encode(word);
}

// Function to calculate cosine similarity
function cosineSimilarity(a: number[], b: number[]) {
  const dotProduct = tf.tidy(() => tf.dot(tf.tensor(a), tf.tensor(b)));
  const magnitudeA = tf.tidy(() => tf.sqrt(tf.sum(tf.square(tf.tensor(a)))));
  const magnitudeB = tf.tidy(() => tf.sqrt(tf.sum(tf.square(tf.tensor(b)))));
  return dotProduct.div(magnitudeA.mul(magnitudeB)).arraySync(); // Use .arraySync() to get the value
}

// Function to pad the embeddings
function padEmbeddings(embedding: number[], maxLength: number): number[] {
  const padded = new Array(maxLength).fill(0); // Create an array filled with zeros
  for (let i = 0; i < embedding.length; i++) {
    padded[i] = embedding[i];
  }
  return padded;
}

// Main function
async function main() {
  const word1 = "happy";
  const word2 = "sad";

  const embedding1 = await getEmbeddings(word1);
  const embedding2 = await getEmbeddings(word2);

  // Check lengths
  const maxLength = Math.max(embedding1.length, embedding2.length);

  // Pad embeddings to ensure they are of the same length
  const paddedEmbedding1 = padEmbeddings(embedding1, maxLength);
  const paddedEmbedding2 = padEmbeddings(embedding2, maxLength);

  // Calculate cosine similarity
  const similarity = cosineSimilarity(paddedEmbedding1, paddedEmbedding2);
  console.log(
    `Cosine Similarity between "${word1}" and "${word2}":`,
    similarity
  );
}

main().catch(console.error);

// const text = 'Hello, world!'
// const tokens = []
// for (const tokenChunk of encodeGenerator(text)) {
//   tokens.push(...tokenChunk)
// }

// console.log(tokens)
