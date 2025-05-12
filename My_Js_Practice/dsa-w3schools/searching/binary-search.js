/**
 * Binary Search
 */

function binarySearch(arr, target) {
  //initialize two variable left and right
  let left = 0;
  let right = arr.length - 1;
  //Iterate through array until left < right
  while (left <= right) {
    //find mid of array
    let mid = Math.floor((left + right) / 2);
    //if target equal to mid of array return mid
    if (arr[mid] == target) return mid;

    //if target less than mid of array
    if (target < arr[mid]) {
      right = mid - 1;
    }
    //if target greater than mid of array
    if (target > arr[mid]) {
      left = mid + 1;
    }
  }
  //if target not found in array return -1
  return -1;
}

const arr = [3, 7, 6, -10, 15, 23.5, 55, -13];
console.log(binarySearch(arr, 15));
