function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();

  // Sort the characters and compare the sorted strings
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  console.log(cleanStr1);
  console.log(sortedStr1);

  return sortedStr1 === sortedStr2;
}

// Example usage
const word1 = "listEn";
const word2 = "siLent";

if (areAnagrams(word1, word2)) {
  console.log(`${word1} and ${word2} are anagrams.`);
} else {
  console.log(`${word1} and ${word2} are not anagrams.`);
}
