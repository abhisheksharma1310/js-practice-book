//find max in a given array

function findMax(arr) {
  let max = arr[0];
  for (el of arr) {
    if (el > max) max = el;
  }
  return max;
  return Math.max(...arr);
}

function SecondMax(arr) {
  let max = arr[0];
  let secMax = arr[1];
  for (el of arr) {
    if (el > max) {
      secMax = max;
      max = el;
    }
  }
  return secMax;
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));

console.log(SecondMax([1, 5, 3, 9, 2]));
console.log(SecondMax([-10, -5, -3, -9, -2]));
console.log(SecondMax([5]));
