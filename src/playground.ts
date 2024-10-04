/*
Problem :=> what if the sentence contains the words greater than the maxLen
*/

import * as tf from '@tensorflow/tfjs';

const reviews: string[] = [
  "The hostel was good but the toilet was not clean",
  "Great stay, very clean facilities",
  "Unhygienic food served at dinner",
];

type WordIndex = { [key: string]: number };

const createWordIndex = (reviews: string[]): WordIndex => {
  const wordIndex: WordIndex = {};
  let index = 1;

  reviews.forEach((review) => {
    const words = review.toLowerCase().split(/\s+/);
    words.forEach((word) => {
      if (!wordIndex[word]) {
        wordIndex[word] = index++;
      }
    });
  });

  return wordIndex;
};

const textToSequences = (wordIndex: WordIndex, reviews: string[]): number[][] => {
    return reviews.map(review => {
      return review.toLowerCase().split(/\s+/).map(word => wordIndex[word] || 0);
    });
  };

const wordIn = createWordIndex(reviews)

const sequence = textToSequences(wordIn, reviews)

const padSequences = (sequences: number[][], maxLen: number): number[][] => {
    return sequences.map(seq => {
      const padded = new Array(maxLen).fill(0);
      return seq.slice(0, maxLen).concat(padded.slice(seq.length));
    });
  };

const paddedSequence = padSequences(sequence, 10)

const input = tf.input({ shape: [10] });

console.log(input)

const embedding = tf.layers.embedding({ inputDim: 1000, outputDim: 128, inputLength: 10 }).apply(input);

console.log(embedding)
