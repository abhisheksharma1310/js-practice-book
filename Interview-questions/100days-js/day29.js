//Write a function called numberRange that generates an array containing consecutive numbers from a to b inclusive.

function numberRange(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(numberRange(1, 9));
