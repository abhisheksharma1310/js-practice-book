/** Insertion sort */

function insertionSort(arr) {
  //outer loop
  for (let i = 1; i < arr.length; i++) {
    //inner loop
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [7, 12, 9, 11, 3];
insertionSort(arr);
console.log(arr);

const arr1 = [64, 34, 25, 12, 22, 11, 90, 5];
insertionSort(arr1);
console.log(arr1);
