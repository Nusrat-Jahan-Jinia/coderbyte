function TrappingWater(arr) {
  let water = 0;
  for (i = 1; i < arr.length - 1; i++) {
    const curr = arr[i];
    const leftMax = Math.max(...arr.slice(0, i));
    const rightMax = Math.max(...arr.slice(i + 1));
    const lowerMax = leftMax > rightMax ? rightMax : leftMax;
    if (lowerMax > curr) {
      water += lowerMax - curr;
    }
  }
  return water;
}

console.log(TrappingWater([1, 2, 1, 2]));
