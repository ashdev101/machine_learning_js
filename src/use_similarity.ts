import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";

// Load the model
async function loadModel() {
  const model = await use.load();
  return model;
}

// Get embeddings for given sentences
async function getEmbeddings(model: any, sentences: string[]) {
  const embeddings = await model.embed(sentences);
  return embeddings.array(); // Convert to array for easier handling
}

// Calculate cosine similarity
function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = tf.dot(tf.tensor(a), tf.tensor(b)).dataSync()[0];
  const magnitudeA = Math.sqrt(tf.dot(tf.tensor(a), tf.tensor(a)).dataSync()[0]);
  const magnitudeB = Math.sqrt(tf.dot(tf.tensor(b), tf.tensor(b)).dataSync()[0]);
  return dotProduct / (magnitudeA * magnitudeB);
}

// Main function
async function main() {
  const model = await loadModel();
  const sentences = [
    "Toilet",
    "Lavatory",
  ];

  const embeddings = await getEmbeddings(model, sentences);
  
  // Calculate similarity
  const similarity = cosineSimilarity(embeddings[0], embeddings[1]);
  console.log("Cosine Similarity:", similarity);
}

main().catch(console.error);
