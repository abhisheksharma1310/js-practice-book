const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
  const found = array.find((el) => el == searchElement);
  return found ? true : false;
}

console.log(includes(numbers, 0));

function includes1(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}

console.log(includes1(numbers, 0));
