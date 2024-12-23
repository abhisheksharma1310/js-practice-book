/**
 * Count number of occurrences (or frequency) in a sorted array
 */

function countOccurence(arr, x) {
  return arr.filter((el) => el == x).length;
}
console.log(countOccurence([1, 1, 2, 2, 2, 2, 3], 2));

function countOccurence1(arr, x) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) res++;
  }
  return res;
}
console.log(countOccurence1([1, 1, 2, 2, 2, 2, 3], 2));

function binarySearch(arr, l, r, x) {
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] < x) l = mid + 1;
    if (arr[mid] > x) r = mid - 1;
  }
  if (l > r) return -1;
}
function countOccurenceBs(arr, x) {
  const n = arr.length;
  let ind = binarySearch(arr, 0, n - 1, x);
  //if element is not present
  if (ind == -1) return -1;
  //count elements on left side
  let count = 1;
  let left = ind - 1;
  while (left >= 0 && arr[left] == x) {
    count++;
    left--;
  }
  //count elements on right side
  let right = ind + 1;
  while (right < n && arr[right] == x) {
    count++;
    right++;
  }
  return count;
}

console.log(countOccurenceBs([1, 1, 2, 2, 2, 2, 3], 2));
