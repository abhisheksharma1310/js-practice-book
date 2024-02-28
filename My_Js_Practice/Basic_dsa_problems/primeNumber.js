/**
 * Prime Numbers
 */

function PrimeNumber(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(PrimeNumber(17));
console.log(PrimeNumber(18));
console.log(PrimeNumber(1));
console.log(PrimeNumber(2));
console.log(PrimeNumber(3));
