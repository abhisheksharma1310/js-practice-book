//**Selection sort */

function selectioSort(arr) {
  //outer loop
  for (let i = 0; i < arr.length - 1; i++) {
    //inner loop
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      //find minmum
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    // delete the minimum value
    const minValue = arr.splice(minIndex, 1);
    // insert deleted value to the left
    arr.splice(i, 0, minValue[0]);
  }
}

const arr = [64, 34, 25, 5, 22, 11, 90, 12];
console.log("Before: ", arr);
selectioSort(arr);
console.log("After: ", arr);
