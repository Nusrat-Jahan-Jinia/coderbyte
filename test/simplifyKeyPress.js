/*
biparti graph
*/

function PlusMinus(num) {
  const numStr = num.toString();
  let result = parseInt(numStr[0]);
  let response = "";

  for (let i = 1; i < numStr.length; i++) {
    const currentNum = parseInt(numStr[i]);
    if (result >= 0) {
      response += "-";
      result -= currentNum;
    } else {
      response += "+";
      result += currentNum;
    }
  }

  return result === 0 ? response : 'not possible';
}


console.log(PlusMinus())