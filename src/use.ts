import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";
// import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
// Load the model
async function loadModel() {
  const model = await use.load();
  return model;
}

// Get embeddings for given sentences
async function getEmbeddings(
  model: any, // Use 'any' if you don't have type definitions
  sentences: string[]
) {
  const embeddings = await model.embed(sentences);
  return embeddings.array(); // Convert to array for easier handling
}

// Main function
async function main() {
  const model = await loadModel();
  const sentences = [
    "Good",
    "Nice"
  ];

  const embeddings = await getEmbeddings(model, sentences);
  console.log("Embeddings:", embeddings);
}

main().catch(console.error);
