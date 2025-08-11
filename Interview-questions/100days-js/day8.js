//factorial of given number

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
