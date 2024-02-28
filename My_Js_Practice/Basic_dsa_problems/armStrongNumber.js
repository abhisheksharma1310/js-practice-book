/**
 * Program for Armstrong Numbers
 */

function Armstrong(n) {
  const digits = [];
  let temp = n;
  let res = 0;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    res += Math.pow(digits[i], digits.length);
  }
  return n === res;
}

console.log(Armstrong(153));
console.log(Armstrong(1634));
console.log(Armstrong(1253));
console.log(Armstrong(120));