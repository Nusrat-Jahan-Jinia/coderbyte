function solution(inputString) {
    var expectedStr = inputString.match(/\([a-z]*\)/);
    console.log(expectedStr + "here");
    
    var reveredStr = "";
    for (let i = expectedStr.length - 1; i >= 0; i--){
        reveredStr += expectedStr[i];
    }
    return reveredStr;


}

console.log(solution("foo(bar)baz"))