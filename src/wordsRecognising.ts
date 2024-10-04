import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-node'; // Import Node.js bindings for TensorFlow.js

const commonArray: string[] = [
    'irresponsible',        'uninviting',         'unapproachable',
    'disorganized',         'not flexible',       'refuse',
    'impolite',             'lazy',               'horrible',
    'uncooperative',        'inadequate',         'ignorant',
    'horrific',             'careless',           'empty',
    'stench',               'stink',              'inattentive',
    'disrespectful',        'offensive',          'unresponsive',
    'unwelcoming',          'slow',               'arrogant',
    'not professional',     'rude',               'inefficient',
    'off putting',          'nobody',             'unfriendly',
    'unprofessional',       'unorganised',        'awful',
    'gloomy',               'reek',               'ignoring',
    'unsympathetic',        'dirty',              'discomfort',
    'staff behavior',       'terrible',           'smelling',
    'offensive',            'dull',               'horrible hospitality',
    'lousy',                'negligent',          'smelly',
    'dirty',                'unhelpful',          'unreliable',
    'horrendous',           'not cooperative',    'dismissive',
    'horrible hospitality', 'biased',             'dismissive',
    'cold',                 'indifferent',        'delay',
    'unsafe',               'unmanned',           'inhospitable',
    'disgusting',           'rude',               'uncooperative',
    'ugly attitude',        'unhelpful',          'unpleasant',
    'stinky',               'poor communication', 'unkept',
    'urgent training',      'noisy',              'incompetent',
    'stinking',             'unclean',            'poor',
    'lazy'
];

const resultCommon: number[] = [
    1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1,
    1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 0, 1
];

function createDataset(sentences: string[], keywords: string[]): number[][] {
    return sentences.map(sentence => {
        return keywords.map(keyword => (sentence.includes(keyword) ? 1 : 0));
    });
}

// Example sentences for training (you should provide a larger dataset)
const sentences: string[] = [
    "The service was unhelpful and rude.",
    "It was a horrible experience.",
    "The staff was friendly and efficient.",
    // Add more example sentences...
];

// Create the dataset
const dataset: number[][] = createDataset(sentences, commonArray);

// Convert to tensors
const xs = tf.tensor2d(dataset);
const ys = tf.tensor2d(resultCommon.map(label => [label]));

// Build the model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [commonArray.length] }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
});

// Train the model
async function trainModel() {
    await model.fit(xs, ys, {
        epochs: 50,
        batchSize: 5,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch}: loss = ${logs?.loss}`);
            }
        }
    });
}

// Run training
trainModel().then(() => {
    console.log("Model trained!");

    // Function to predict keywords in a new sentence
    function predictKeywords(sentence: string) {
        const inputData = commonArray.map(keyword => (sentence.includes(keyword) ? 1 : 0));
        const inputTensor = tf.tensor2d([inputData]);
        const prediction = model.predict(inputTensor) as tf.Tensor;
        prediction.print(); // Prints the probability for each keyword
    }

    // Example prediction
    predictKeywords("The service was unhelpful and rude.");
});
