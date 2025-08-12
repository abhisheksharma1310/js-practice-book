//Find mean of array element

function findMean(arr) {
  if (arr.length == 0) return 0;
  return Math.floor(arr.reduce((acc, el) => (acc += el), 0) / arr.length);
}

console.log(findMean([1, 2, 3, 4, 5]));
