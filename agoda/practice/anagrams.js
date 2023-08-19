/*
Given an array of integers 'a', your task is to count the number of pairs 
'i' and 'j' ( where 0 <= i < j < a.length ),
such that a[i] and a[j] are digit anagrams.
*/



function countAnagramPairs(arr) {
  const sortedStrings = arr.map((num) => String(num).split("").sort().join(""));

  let totalCount = 0;
  const countMap = new Map();
  for (const sortedStr of sortedStrings) {
    if (countMap.has(sortedStr)) {
      totalCount += countMap.get(sortedStr);
      countMap.set(sortedStr, countMap.get(sortedStr) + 1)
      console.log(countMap);
    }else{
      countMap.set(sortedStr, 1);
    }
  }
  return totalCount;
}
// Example usage
const inputArray = ["listen", "silent", "dog", "god", "act", "cab", "odg", 'gdo'];
const result = countAnagramPairs(inputArray);
console.log(result); 
