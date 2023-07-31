function SymmetricTree(strArr) {
  var power = 0,
    count = 0;
  output = [];

  while (power < strArr.length) {
    power = Math.pow(2, count);
    output.push(strArr.splice(0, power));
    count++;
  }

  return output.every(isPalindrome);

  function isPalindrome(array) {
    var str = array.join(""),
      rev = array.reverse().join("");

    return str === rev;
  }
}

// keep this function call here
console.log(SymmetricTree(["4", "3", "4"]));
