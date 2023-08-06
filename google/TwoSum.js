function TwoSum(arr) { 

  // code goes here  
  var target = arr[0];
  var len = arr.length;
  var result = [];

  for(i=1; i<len; i++){
     for(j=i+1; j<len; j++){
       if(target === arr[i] + arr[j]){
         result.push(arr[i], arr[j]);
       }
    }
  }
  return result.length > 0 ? result.join(', ') : -1; 

}
   
// keep this function call here 
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11]));