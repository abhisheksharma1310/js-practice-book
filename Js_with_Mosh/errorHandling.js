const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid Argument.");
  }

  return array.reduce((acc, cur) => (cur === searchElement ? acc + 1 : acc), 0);
}

try {
  console.log(countOccurrences(numbers, 1));
} catch (error) {
  console.error(error);
}
