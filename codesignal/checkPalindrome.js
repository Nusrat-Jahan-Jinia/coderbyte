function solution(inputString) {
  var len = Math.floor(inputString.length / 2);

  for (var i = 0; i < len; i++)
    if (inputString[i] !== inputString[inputString.length - i - 1])
      return false;
  return true;
}

console.log(solution("aabaa"));
