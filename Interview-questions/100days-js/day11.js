//sum of digits of a given number

function sumofDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function sumofDigits1(num) {
  let arr = Array.from(String(num));
  return arr.reduce((acc, el) => (acc += +el), 0);
}

console.log(sumofDigits(123456));
console.log(sumofDigits1(123456));
