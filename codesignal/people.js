function solution(a) {
 
     var sum1=0;
     var sum2=0;
    
    for(let i=0; i< a.length; i++){
        if(i%2==0){
            sum1 += a[i];
        }else{
             sum2 +=a[i];
        }
    }
    
   return [sum1, sum2];
    
}
console.log(solution([50, 60, 60, 45, 70]));