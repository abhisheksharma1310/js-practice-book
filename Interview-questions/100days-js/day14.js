// Write a function called isPower of two that takes an integer num as input and returns true if num is a power of two otherwise false.

function powerOfTwo(num) {
  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = Math.floor(num / 2);
  }
  return true;
}

function powerOfTwo1(n) {
  return n > 0 && (n & (n - 1)) == 0;
}

console.log(powerOfTwo(32));
console.log(powerOfTwo(64));
console.log(powerOfTwo(62));

console.log(powerOfTwo1(32));
console.log(powerOfTwo1(64));
console.log(powerOfTwo1(62));
