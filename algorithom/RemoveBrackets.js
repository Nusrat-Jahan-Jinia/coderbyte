function RemoveBrackets(str) {
  while (str.includes("()")) {
    str = str.replace("()", "");
  }
  return str.length;
}

// keep this function call here
console.log(RemoveBrackets("(()("));
