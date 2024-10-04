// import * as tf from '@tensorflow/tfjs';
// import { loadBertTokenizer, loadBertModel } from '@tensorflow-models/bert';

// // Load the BERT model and tokenizer
// async function loadModel() {
//     const tokenizer = await loadBertTokenizer();
//     const model = await loadBertModel();
//     return { tokenizer, model };
// }

// // Get embeddings for given sentences
// async function getEmbeddings(model, tokenizer, sentences) {
//     const inputIds = [];
//     const attentionMasks = [];

//     // Tokenize each sentence
//     for (const sentence of sentences) {
//         const encoded = tokenizer.encode(sentence);
//         inputIds.push(encoded.ids);
//         attentionMasks.push(encoded.attentionMask);
//     }

//     // Convert to tensors
//     const inputTensor = tf.tensor2d(inputIds);
//     const attentionMaskTensor = tf.tensor2d(attentionMasks);

//     // Get embeddings from the model
//     const outputs = await model.predict([inputTensor, attentionMaskTensor]);
//     return outputs[0].arraySync(); // Convert to array for easier handling
// }

// // Main function
// async function main() {
//     const sentences = [
//         "I am very happy today.",
//         "I am very sad today."
//     ];

//     const { tokenizer, model } = await loadModel();
//     const embeddings = await getEmbeddings(model, tokenizer, sentences);
    
//     console.log("BERT Embeddings:", embeddings);
// }

// main().catch(console.error);
