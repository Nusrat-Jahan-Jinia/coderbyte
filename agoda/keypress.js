/*
You have a passage of text that needs to be retyped. unfortunately , some of the letter keys on your keyboard
are broken! Given an array letters representing the working letter keys and a string text , your task is to
determine how many words from the text can be typed in full using the broken keyboard. it is sure that all
non-letter keys (including digits, punctuation marks, and special characters) are working.
*/

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}
function countTypedWords(letters, text) {
  const workingKeysSet = new Set(letters);
  const words = text.split(/\s+/); // Split the text into words
  let validWordsCount = 0;
  for (const word of words) {
    let isValidWord = true;
    for (const char of word) {
      const lowercaseChar = char.toLowerCase();
      if (isLetter(char) && !workingKeysSet.has(lowercaseChar)) {
        isValidWord = false;
        break;
      }
    }
    if (isValidWord) {
      validWordsCount++;
    }
  }
  return validWordsCount;
}
// Example usage
const workingKeys = ["a", "s", "d", "f", "j", "k", "l"];
const inputText = "as sad fad salad ask add 1.2,3!"; // Words: as, sad, fad, salad, ask, add, 1.2,3!
const result = countTypedWords(workingKeys, inputText);
console.log(result); // Output: 8
