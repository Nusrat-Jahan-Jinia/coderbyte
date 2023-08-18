/*
You are implementing your own programming language and you've decided to add support for merging
strings. A typical 'merge' function would take two strings 's1' and 's2' and return the lexicographically smallest
result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that
maintains the relative order of the characters in each string.
You'd like to make your language more unique, so for your merge function, instead of comparing the
characters in the usual lexicographical order, you will compare them based on how many times the occur in
their respective inital strings ( fewer occurances means the character is considered smaller). if the number of
occurances are equal , then the character should be compared in the usual lexcographical way. if both
number of occurances and characters are equal , you should take the characters from the first string of the
result. Note that occurances in the initial string are compared - they do not change over the merge process.
For example, if s1 = 'super' and s2 = 'tower' the result should be merge(s1, s2) = 'stouperwer'
Another example, if s1 = 'dce' and s2 = 'cccbd' the result should be merge(s1, s2) = 'dcecccbd'
*/

function merge(s1, s2) {
  const count1 = new Map();
  const count2 = new Map();
  for (const char of s1) {
    count1.set(char, (count1.get(char) || 0) + 1);
  }
  for (const char of s2) {
    count2.set(char, (count2.get(char) || 0) + 1);
  }
  let merged = "";
  let i = 0,
    j = 0;
  while (i < s1.length && j < s2.length) {
    if (
      count1.get(s1[i]) < count2.get(s2[j]) ||
      (count1.get(s1[i]) === count2.get(s2[j]) && s1[i] <= s2[j])
    ) {
      merged += s1[i];
      i++;
    } else {
      merged += s2[j];
      j++;
    }
  }
  while (i < s1.length) {
    merged += s1[i];
    i++;
  }
  while (j < s2.length) {
    merged += s2[j];
    j++;
  }
  return merged;
}
// Example usage
console.log(merge("super", "tower"));
console.log(merge("dce", "cccbd"));

// Output: 'stouperwer'
// Output: 'dcecccbd'
