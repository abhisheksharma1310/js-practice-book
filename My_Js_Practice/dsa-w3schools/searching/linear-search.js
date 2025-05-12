/**
 * Linear Search
 */

function linearSearch(arr, target) {
  //Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    //search for the target elemnt in the array and return index
    if (arr[i] == target) return i;
  }
  //if element not found return -1;
  console.log("Element not exist in given array.");
  return -1;
}

const arr = [3, 7, 6, -10, 15, 23.5, 55, -13];
console.log(linearSearch(arr, 15));
