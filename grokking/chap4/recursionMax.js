"use strict";

function FindMax(array) {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }

  let sub_max = FindMax(array.slice(1));
  return array[0] > sub_max ? array[0] : sub_max;
}

console.log(FindMax([0, 1, 2, 3, 4, 5]));
