"use strict";

function sunRecursive(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sunRecursive(arr.slice(1));
}

console.log(sunRecursive([1, 2, 3, 4]));
