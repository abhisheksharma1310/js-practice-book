//sort array

//write a function to sort an array in an ascending order.

//Do not change original array
//Do not use in-built array methods

function sortArray(arr) {
  //copy array
  const newArr = [...arr];
  const len = newArr.length;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        swapped = true;
      }
    }
    //stops if no swaps
    if (!swapped) break;
  }
  return newArr;
}

console.log(sortArray([5, 3, 1, 8]));
