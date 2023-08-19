/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar. a = [1, 2, 3], b = [1, 2, 3]
*/

function areSimilar(a, b) {

    // 1. if both length is equal
    // 2. check every element exists in other array
    // 3. except first array elements , there will be no others element

    var len1 = a.length;
    var len2 = b.length;
    var diff = [];

    if (len1 !== len2) { return false; }

    for (let i = 0; i < len1; i++){
        if (a[i] !== b[i]) {
            diff.push(i);
            if (diff.length > 2) {
                return false;
            }
            if (diff.length === 2) {
                                if (a[diff[0]] !== b[diff[1]] || a[diff[1]] !== b[diff[0]]) {
                    return false;
                }
            }
        }
    }

    

   return diff.length === 0 || diff.length === 2;
}

console.log(areSimilar([1, 2, 3], [2, 1, 3]))