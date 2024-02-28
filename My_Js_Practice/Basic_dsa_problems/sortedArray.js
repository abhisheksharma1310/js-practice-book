/**
 * Program to check if an array is sorted or not (Iterative and Recursive)
 */

function sortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(sortedArray([20, 21, 45, 89, 89, 90]));
console.log(sortedArray([20, 20, 45, 89, 89, 90]));
console.log(sortedArray([20, 20, 78, 98, 99, 97]));

function sortedArrayR (arr, n) {
    if(n === 1 || n === 0) return true;
    if(arr[n-1] < arr[n-2]) return false;
    return sortedArrayR(arr, n-1);
}

console.log(sortedArrayR([20, 21, 45, 89, 89, 90], 6));
console.log(sortedArrayR([20, 20, 45, 89, 89, 90], 6));
console.log(sortedArrayR([20, 20, 78, 98, 99, 97], 6));