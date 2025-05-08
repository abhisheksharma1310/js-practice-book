/**Quick Sort */

function quickSort(arr) {
  //base case
  if (arr.length < 2) return arr;
  // assume last element as pivot
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  //loop through array
  for (let i = 0; i < arr.length - 1; i++) {
    //if element is less than pivot push that element in left array otherwise put that in right array
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // call this function recursively
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(quickSort(arr));
