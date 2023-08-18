/*
Given an array of integers 'a', your task is to count the number of pairs 'i' and 'j' ( where 0 <= i < j < a.length ),
such that a[i] and a[j] are digit anagrams.
*/

function countDigitAnagramPairs(arr) {
  const sortedStrings = arr.map((num) => String(num).split("").sort().join(""));
  const countMap = new Map();
  let totalCount = 0;
  for (const sortedStr of sortedStrings) {
    if (countMap.has(sortedStr)) {
      totalCount += countMap.get(sortedStr);
      countMap.set(sortedStr, countMap.get(sortedStr) + 1);
    } else {
      countMap.set(sortedStr, 1);
    }
  }
  return totalCount;
}
// Example usage
const inputArray = [123, 231, 312, 456, 654];
const result = countDigitAnagramPairs(inputArray);
console.log(result); // Output: 3 (Pairs: [123, 231], [123, 312], [231, 312])
