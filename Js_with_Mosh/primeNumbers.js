function showPrimes(limits) {
  for (let number = 2; number <= limits; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor <= number / 2; factor++) {
    //if number is divisible by any factor than it is not prime
    if (number % factor == 0) {
      return false;
    }
  }
  // if number is not divisible by any number then it is a prime number
  return true;
}

showPrimes(20);
