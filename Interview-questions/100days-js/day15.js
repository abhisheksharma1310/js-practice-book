//write a function to calculate the sum of all elements in an array.

function sumSquare(arr) {
  return arr.reduce((acc, el) => (acc += el * el), 0);
}

console.log(sumSquare([1, 2, 3, 4]));
