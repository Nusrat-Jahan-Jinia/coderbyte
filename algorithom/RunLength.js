function RunLength(str) {
  var runLength = 1;
  var returnString = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      returnString += runLength + str[i];
      runLength = 1;
    } else {
      runLength++;
    }
  }
  return returnString;
}

// keep this function call here
console.log(RunLength("wwwggopp"));
