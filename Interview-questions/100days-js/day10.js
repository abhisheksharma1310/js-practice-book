//find array are equal or not

function isArrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;

  return arr1.every((curVal, index) => curVal === arr2[index]);
}

console.log(isArrEqual([1, 2, 3], [1, 2, 3]));
console.log(isArrEqual([1, 2, 3], [1, 2, 4]));
console.log(isArrEqual([], []));
