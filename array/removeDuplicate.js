function removeDuplicate(nums ) {
    
    if (nums.length <= 1) {
        return nums;
    }
    let index = 1;


    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index += 1;
        } 
        console.log(nums)

    }
    return index;
}

console.log(removeDuplicate([1,1,2]))