function ShortestPath(strArr) {
  let n = parseInt(strArr.shift());
  console.log("hello" + n);
  let links = {};
  let start = strArr[0];
  let end = strArr[n - 1];
  return strArr;
}

// keep this function call here
console.log(
  ShortestPath([
    "5",
    "A",
    "B",
    "C",
    "D",
    "F",
    "A-B",
    "A-C",
    "B-C",
    "C-D",
    "D-F",
  ])
);
