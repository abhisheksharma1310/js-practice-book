const array = [1, 2, 3, 4];

function except(array, exclude) {
  return array.filter((el) => !exclude.includes(el));
}

console.log(except(array, [1, 2]));

function except1(array, exclude) {
  const arr = [];
  for (element of array) {
    if (!exclude.includes(element)) arr.push(element);
  }
  return arr;
}

console.log(except(array, [1, 2]));
