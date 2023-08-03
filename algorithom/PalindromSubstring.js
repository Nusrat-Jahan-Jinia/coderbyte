function isPalindrom(str) {
  return str === str.split("").reverse().join("");
}

function PalindromicSubstring(str) {
  var longest = "";
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      var substr = str.slice(i, j + 1);

      if (isPalindrom(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  if (longest.length <= 2) {
    return "none";
  }
  return longest;
}

// keep this function call here
console.log(PalindromicSubstring("hellosannasmith"));
