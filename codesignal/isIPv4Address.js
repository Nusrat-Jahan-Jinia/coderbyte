function solution(inputString) {
  let ipArray = inputString.split(".");

  for (let i = 0; i < ipArray.length; i++) {
    if (ipArray[i] === "" || ipArray.length !== 4) {
      return false;
    }

    let currentNum = Number(ipArray[i]);
    console.log(currentNum);

    if (currentNum < 0 || currentNum > 255 || isNaN(currentNum)) {
      return false;
    }
  }

  return true;
}

console.log(solution("172.16.254.1"));
