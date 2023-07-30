function MaxSubarray(arr) { 

  // code goes here  
  var max = 0;
  var len = arr.length;
  var arrMax = 0;

  for(i=0; i<len; i++){
    for(j=i+1; j<=len; j++){
      var temp = arr.slice(i,j);
      if(maxTotal(temp) > max ){
        max = maxTotal(temp);
      }
    }
  }
  return max; 

}

function maxTotal(arr){
  arrMax = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  return arrMax;
}
   
// keep this function call here 
console.log(MaxSubarray([-2, 5, -1, 7, -3]));