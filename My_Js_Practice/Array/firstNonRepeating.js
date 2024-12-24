/**
 * Find first non-repeating element in a given Array of integers
 */

function firstNonRepeating(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 0) return arr[i];
  }
}
console.log(firstNonRepeating([-1, 2, -1, 3, 0]));
console.log(firstNonRepeating([9, 4, 9, 6, 7, 4]));
