/**
 * Find duplicates in O(n) time and O(1) extra space | Set 1
 */

function duplicates(arr) {
  let set = new Set();
  arr.sort((a, b) => a - b);
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == arr[i+1]) set.add(arr[i]);
  }
  if (set.size == 0) return [-1];
  return [...set];
}
console.log(duplicates([1, 2, 3, 6, 3, 6, 1]));
