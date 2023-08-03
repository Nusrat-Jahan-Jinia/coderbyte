function FindIntersection(strArr) {
  var firstarr = strArr[0].split(",");
  var secondarr = strArr[1].split(",");

  let firstArrayInt = firstarr.map((element) => parseInt(element));
  let secondArrayInt = secondarr.map((element) => parseInt(element));
  var result = [];
  for (i = 0; i < firstArrayInt.length; i++) {
    for (j = 0; j < secondArrayInt.length; j++) {
      if (firstArrayInt[i] === secondArrayInt[j]) {
        result.push(firstArrayInt[i]);
      }
    }
  }

  return result;
}

// keep this function call here
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
