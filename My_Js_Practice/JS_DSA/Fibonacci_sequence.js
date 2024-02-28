/**
 * Problem: Given a number "n", find the first "n" elements of the Fibonacci sequence
 * In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * The first two number in the sequence are 0 and 1
 * fibonacci(2) = [0,1]
 * fibonacci(3) = [0,1,1]
 * fibonacci(7) = [0,1,1,2,3,5,8]
 */

//Time complexity: O(n) linear
function Fibonacci(input) {
  let base = [0, 1];
  if (input < 2) return [0];
  for (let i = 2; i < input; i++) {
    base[i] = base[i - 1] + base[i - 2];
  }
  return base;
}

console.log(Fibonacci(3));

/**
 * Use recursive method and find nth element of n fibonacci numbers.
 */
//Time complexity: O(2^n) exponential
function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
