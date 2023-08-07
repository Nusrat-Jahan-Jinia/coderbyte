function makeArrayConsecutive(arr) {
  // Find the minimum and maximum values in the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Create a new array containing the missing elements
  const consecutiveArray = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      consecutiveArray.push(i);
    }
  }

  return consecutiveArray;
}

const originalArray = [4, 7, 10, 15];
const consecutiveArray = makeArrayConsecutive(originalArray);
console.log(consecutiveArray);
