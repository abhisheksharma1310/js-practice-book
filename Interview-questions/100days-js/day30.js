//numberRange generator using recursion

function numberRange(a, b, arr) {
  if (a > b) {
    return arr;
  }
  arr.push(a);
  return numberRange(a + 1, b, arr);
}

console.log(numberRange(0, 5, []));
