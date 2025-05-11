/**
 * Counting Sort
 */

function countingSort(arr) {
  //arr for count occurance
  const countArr = [];
  //loop through original array and push number of occurances in countArr
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    countArr[el] = countArr[el] ? countArr[el] + 1 : 1;
  }
  //sort element
  let index = 0;
  for (let i = 0; i < countArr.length; i++) {
    const count = countArr[i];
    for (let j = count; j > 0; j--) {
      arr[index] = i;
      index++;
    }
  }
}

const arr = [2, 3, 0, 2, 3, 2];
countingSort(arr);
console.log(arr);
const arr1 = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
countingSort(arr1);
console.log(arr1);
