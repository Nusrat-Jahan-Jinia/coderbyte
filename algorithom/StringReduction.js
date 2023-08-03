function StringReduction(str) {
  var res = str.length + 1;

  while (res > str.length) {
    res = str.length;
    str = str.replace(/ab|ba/, "c");
    str = str.replace(/ac|ca/, "b");
    str = str.replace(/bc|cb/, "a");
  }
  return str.length;
}

// keep this function call here
console.log(StringReduction("abcabc"));
