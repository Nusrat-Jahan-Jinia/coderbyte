function solution(matrix) {
  let r = 0; // The variable to store the sum of column values

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      else r += matrix[i][j];
    }
  }

  return r;
}

const matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

console.log(solution(matrix));
