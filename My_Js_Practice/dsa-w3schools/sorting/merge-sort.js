/**
 * Merge Sort
 */

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) {
    return arr;
  }
  // split array in two sub-array
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // call mergesort function recursively to make sub-array
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  //call sort function to sort and merge sub-array
  return merge(sortedLeftArr, sortedRightArr);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // loop throght both sub-array and compare elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //merge remaining sorted array
  result = result.concat(left.slice(i));
  result = result.concat(right.slice(j));

  //retun the result
  return result;
}

const arr = [3, 7, 6, -10, 15, 23.5, 55, -13];
console.log(mergeSort(arr));
