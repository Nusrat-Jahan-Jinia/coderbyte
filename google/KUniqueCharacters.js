function KUniqueCharacters(str) {
  const k = Number(str[0]);
  let longest = "";
  
  for (let i = 1; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subString = str.slice(i, j);
      if (hasKUniqueCharacters(subString, k) && subString.length > longest.length) {
        longest = subString;
      }
    }
  }
  
  return longest;
}

function hasKUniqueCharacters(str, k) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const uniqueCount = Object.keys(charCount).length;
  return uniqueCount <= k;
}

// keep this function call here
console.log(KUniqueCharacters("2aabbacbaa"));
