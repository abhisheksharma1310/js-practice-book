//find average of all array element

function findAverage(arr) {
  const sum = arr.reduce((acc, el) => (acc += el), 0);
  return sum / arr.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));
