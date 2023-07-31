function KUniqueCharacters(str) {
  var arr = str.split(""),
    k = arr.shift();

  var longest = {};
  longest.count = 0;
  longest.str = "";

  //determine the number of unique characters and compare to provided limit of K
  function testUniqueLimit(subArray) {
    var uniqueLetters = subArray.filter(function (char, i, arr) {
      return arr.indexOf(char) === i;
    });
    return uniqueLetters.length <= k;
  }

  //compare current substring to longest substring that we've found thus far and keep the longest
  function compareLength(subArray) {
    if (subArray.length > longest.count) {
      longest.count = subArray.length;
      longest.str = subArray.join("");
    }
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var tempArr = arr.slice(i, j + 1);
      if (testUniqueLimit(tempArr)) {
        compareLength(tempArr);
      }
    }
  }

  return longest.str;
}

// keep this function call here
console.log(KUniqueCharacters("2aabbacbaa"));
