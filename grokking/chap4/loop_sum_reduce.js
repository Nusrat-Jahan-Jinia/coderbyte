function sumReduce(nums) {
  return nums.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sumReduce([1, 2, 3, 4]));
