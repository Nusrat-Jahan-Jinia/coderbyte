function MaximalSquare(strArray) {
  var longestSide = 0;
  var cache = [];

  for (var i = 0; i < strArray.length; i++) {
    cache[i] = [];
    for (var j = 0; j < strArray[i].length; j++) {
      cache[i][j] = strArray[i][j];
    }
  }

  for (var i = 0; i < cache.length; i++) {
    for (var j = 0; j < cache[i].length; j++) {
      if (i < 1 || j < 1 || cache[i][j] < 1) {
      } else {
        cache[i][j] =
          Math.min(cache[i - 1][j], cache[i - 1][j - 1], cache[i][j - 1]) + 1;
      }
      if (longestSide < cache[i][j]) {
        longestSide = cache[i][j];
      }
    }
  }

  return longestSide * longestSide;
}
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));
