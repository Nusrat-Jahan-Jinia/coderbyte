var rotate = function (nums, k) {
    
      const n = nums.length;
    k %= n; // To handle cases where k is larger than the array length
    
    console.log(k);
    const rotated = nums.splice(n - k, k);
    console.log(rotated);
    nums.unshift(...rotated);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));