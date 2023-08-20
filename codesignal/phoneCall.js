function solution(min1, min2_10, min11, s) {
  var firstCall = s - min1;
  var secondCall = firstCall - 9 * min2_10;
  var thirdCall = secondCall / min11;
  var totalCall = 1 + 9 + thirdCall;
  return totalCall;
}

console.log(solution(3, 1, 2, 20));
