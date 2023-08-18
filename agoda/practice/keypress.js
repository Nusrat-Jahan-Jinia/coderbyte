/*
You have a passage of text that needs to be retyped. unfortunately , some of the letter keys on your keyboard
are broken! Given an array letters representing the working letter keys and a string text , your task is to
determine how many words from the text can be typed in full using the broken keyboard. it is sure that all
non-letter keys (including digits, punctuation marks, and special characters) are working.
*/

function isLetter(char) {
  var pattern = /[a-zA-Z]/g;
  var result = char.match(pattern);
  return result;
}

function countTypedWords(letters, text) {
  const workingKeysSet = new Set(letters);
  const breakpoint = " ";
  const words = text.split(breakpoint);
  console.log(words);

  let validWordsCount = 0;
  for (const word of words) {
    let isValidWord = true;

    for (const char of word) {
      const lowercasechar = char.toLowerCase();

      if (isLetter(char) && !workingKeysSet.has(lowercasechar)) {
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
const workingKeys = ["a", "b", "c", "d", "e"];
const inputText = "abc de fab"; // Words: as, sad, fad, salad, ask, add, 1.2,3!
const result = countTypedWords(workingKeys, inputText);
console.log(result);
