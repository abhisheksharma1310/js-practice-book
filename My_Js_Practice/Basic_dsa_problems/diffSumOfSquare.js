/**
 * Difference between sum of the squares of first n natural numbers and square of sum
 */

function sumOfSquare(num) {
  let sum = 0,
    squareSum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    squareSum += i * i;
  }
  return Math.abs(squareSum - sum * sum);
}

console.log(sumOfSquare(3));
console.log(sumOfSquare(10));

function sumOfSquare1 (n) {
    //sum of square of first n natural numbers
    const k = (n*(n+1)*(2*n+1))/6;
    //sum of first n natural number
    const l = (n*(n+1))/2;
    //square of sum of first n natural number
    const m = l*l;
    //diff of square sum
    return Math.abs(k - m);
}

console.log(sumOfSquare1(3));
console.log(sumOfSquare1(10));
