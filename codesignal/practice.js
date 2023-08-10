function practice(num) {
  var total = 0;

  var len = num.length;

  for (let i = 0; i < len; i++) {
    total = total + num[i];
  }
  return total;
}

console.log(practice([1, 2, 3, 4]));
