function MaxSubarray(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > max) {
        max = currentSum;
      }
    }
  }

  return max;
}
// keep this function call here 
console.log(MaxSubarray([-2, 5, -1, 7, -3]));