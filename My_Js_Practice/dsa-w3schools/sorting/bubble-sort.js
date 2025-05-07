/**Bubble Sort */

function BubbleSort(arr) {
  //loop through outer loop
  for (let i = 0; i < arr.length - 1; i++) {
    //loop through inner loop
    for (let j = 0; j < arr.length - i - 1; j++) {
      //check if cuurent element is bigger than next than swap
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const arr = [7, 12, 9, 11, 3];
console.log("Before", arr);
BubbleSort(arr);
console.log("After", arr);

// improved version
function BubbleSortImp() {
  // track if no swap occur in inner loop
  const swap = false;
  // loop through outer loop
  for (let i = 0; i < arr.length; i++) {
    // inner loop
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if cuurent element is bigger than next element than swap
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
}

const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Before", arr1);
BubbleSort(arr1);
console.log("After", arr1);
