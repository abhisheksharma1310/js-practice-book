const numbers = [1, 2, 3, 4];

function getMax(array) {
  //   let max = 0;
  //   for (element of array) {
  //     if (element > max) max = element;
  //   }
  //   return max;

  return array.reduce((a, b) => (a > b ? a : b));
}

console.log(getMax(numbers));

function get2ndMax(array) {
  // sort array in descending order
  array.sort((a, b) => b - a);
  for (element of array) {
    if (element !== array[0]) return element;
  }
}

console.log(get2ndMax(numbers));
