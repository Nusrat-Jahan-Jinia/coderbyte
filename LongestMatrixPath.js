function LongestMatrixPath(strArr) {
  let maxLength = 0;
  function search(i, j, pathLength) {
    let newPathLength = pathLength + 1;
    if (newPathLength > maxLength) {
      maxLength = newPathLength;
    }
    if (strArr[i - 1] && +strArr[i - 1][j] > +strArr[i][j]) {
      search(i - 1, j, newPathLength);
    }
    if (strArr[i + 1] && +strArr[i + 1][j] > +strArr[i][j]) {
      search(i + 1, j, newPathLength);
    }
    if (strArr[i][j + 1] && +strArr[i][j + 1] > +strArr[i][j]) {
      search(i, j + 1, newPathLength);
    }
    if (strArr[i][j - 1] && +strArr[i][j - 1] > +strArr[i][j]) {
      search(i, j - 1, newPathLength);
    }
  }
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[0].length; j++) {
      search(i, j, 0);
    }
  }
  return maxLength - 1;
}

// keep this function call here
console.log(LongestMatrixPath(["12256", "56219", "43215"]));
