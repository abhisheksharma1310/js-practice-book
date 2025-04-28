function dropElements(arr, func) {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      break;
    }
  }
  return arr.slice(i);
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
