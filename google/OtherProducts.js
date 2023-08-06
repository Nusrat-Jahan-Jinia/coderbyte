function OtherProducts(arr) {
  var len = arr.length;
  var result = [];

  for (i = 0; i < len; i++) {
    result[i] =
      arr.reduce(function (a, b) {
        return a * b;
      }) / arr[i];
  }
  return result;
}

console.log(OtherProducts([1, 2, 3, 4, 5]));
