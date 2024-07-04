function sumOfArguments(...input) {
  let array = Array.isArray(input) ? input.flat(1) : input;

  return array.reduce((acc, cur) => (acc += cur), 0);
}

console.log(sumOfArguments([1, 2, 3]));
console.log(sumOfArguments(1, 2, 3));
