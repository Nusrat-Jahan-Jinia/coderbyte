function solution(inputArray) {
  var max = -Infinity;

  for (var i = 0; i + 1 < inputArray.length; i++) {
    if (max < inputArray[i] * inputArray[i + 1]) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}

console.log(solution([3, 6, -2, -5, 7, 3]));
