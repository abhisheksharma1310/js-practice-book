//array map method

const arr = [1, 2, 3, 4, 5, 6];

/**
 * array map method
 */

const mapArr = arr.map(function (value, index, array) {
  return value * 5;
});

console.log("Mapped Array: ", mapArr);

/**
 * array reduced method (give sum of all elements)
 * accumulate === preveValue
 */

const redArry = arr.reduce(function (accumulate, currentValue) {
  return accumulate + currentValue;
}, 0);

console.log("Reduced Array: ", redArry);

/**
 * Array forEach
 * this function change actual array value
 */

arr.forEach(function (value, index, array) {
  return value * 5;
});

console.log(arr);
