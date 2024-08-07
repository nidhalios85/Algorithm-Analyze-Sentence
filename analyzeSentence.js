function analyzeSentence(sentence) {
  // Initialize counters
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;
  
  // Define vowels
  const vowels = 'aeiouAEIOU';
  
  // Initialize a flag to check if we are inside a word
  let inWord = false;
  
  // Process each character
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    
    // Increase length counter for every character
    length++;
    
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      vowelCount++;
    }
    
    // Check if the character is a space or period to count words
    if (char === ' ' || char === '.') {
      if (inWord) {
        wordCount++;
        inWord = false;
      }
    } else {
      inWord = true;
    }
  }
  
  // Return the results
  return {
    length,
    wordCount,
    vowelCount
  };
}

// Example usage
const sentence = "This is a simple example sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of sentence: ${result.length}`);
console.log(`Number of words: ${result.wordCount}`);
console.log(`Number of vowels: ${result.vowelCount}`);
