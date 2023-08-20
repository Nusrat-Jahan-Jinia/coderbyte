function solution(inputArray) {
  // sort the array
  // remove 0 items
  // find the lowest and highest value
  // diff the hightest and lowest

  var sortedArr = inputArray.sort().filter(Number);
  const len = sortedArr.length;

  var diff = Math.abs(sortedArr[len - 1]) - Math.abs(sortedArr[0]);
  return diff;
}
console.log(solution([2, 4, 1, 0]));
