function solution(arr) {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      count++;

      if (count > 1) {
        return false;
      }

      if (
        i > 1 &&
        arr[i] <= arr[i - 2] &&
        i < arr.length - 1 &&
        arr[i + 1] <= arr[i - 1]
      ) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution([1, 2, 1, 3]));
