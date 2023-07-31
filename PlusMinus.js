function PlusMinus(num) {
  let numlong = num.toString().split("");
  let result = numlong[0];
  let cadena = "";

  for (let i = 1; i < numlong.length; i++) {
    if (result >= 0) {
      cadena += "-";
      result = result - parseInt(numlong[i]);
    } else {
      cadena += "+";
      result = result + parseInt(numlong[i]);
    }
  }

  if (result !== 0) {
    return "not possible";
  } else {
    return cadena;
  }
}

console.log(PlusMinus(26712));
