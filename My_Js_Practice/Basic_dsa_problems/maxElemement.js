/**
 * Program to find the maximum element in a Matrix
 */

function maxElement(matrix) {
  let max = 0;
  for (let row of matrix) {
    for (element of row) {
      if (element > max) max = element;
    }
  }
  return max;
}

console.log(
  maxElement([
    [1, 2, 3, 4],
    [25, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  maxElement([
    [9, 8, 7, 6],
    [5, 4, 3, 2],
    [1, 0, 12, 45],
  ])
);
