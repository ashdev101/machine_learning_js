// import nlp from 'compromise';

// function extractKeywords(text : string) {
//     const doc = nlp(text);
//     const keywords = doc.nouns().out('array');
//     return Array.from(new Set(keywords)); // Return unique keywords
// }

// // Example usage
// const review = "The customer service was great and the product quality was top-notch.";
// const keywords = extractKeywords(review);
// console.log(keywords); // ["customer", "service", "product", "quality"]


import keywordExtractor from "keyword-extractor";

function extractKeywords(text : string) {
    const extractionResult = keywordExtractor.extract(text, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: true,
    });
    return extractionResult;
}

// Example usage
// const review = "The customer service was outstanding, and the product quality was prompt.";
const review = "My name is antony and I am a good boy";
const keywords = extractKeywords(review);
console.log(keywords); // Should give you individual keywords like ["customer", "service", "outstanding", "product", "quality", "prompt"]
