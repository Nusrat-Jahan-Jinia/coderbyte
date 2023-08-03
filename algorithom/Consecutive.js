function Consecutive(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  console.log(min);
  console.log(max);

  var range = max - min + 1,
    len = arr.length;
  return range - len;
}

// keep this function call here
console.log(Consecutive([5, 10, 15]));
