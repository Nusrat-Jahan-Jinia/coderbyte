function StepWalking(num) {
  var q = [0, 1];
  for (i = 0; i < num; i++) {
    q = [q[1], q[1] + q[0]];
  }
  return q[1];
}

// keep this function call here
console.log(StepWalking(3));
