const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
  //   let count = 0;
  //   for (let elelent of array) {
  //     if (elelent === searchElement) count++;
  //   }
  //   return count;

  return array.reduce(
    (acc, curr) => (acc += curr === searchElement ? 1 : 0),
    0
  );
}

console.log(countOccurrences(numbers, 1));
