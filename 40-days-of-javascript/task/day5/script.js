/**
 * 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
 *
 * *
 * * *
 * * * *
 * * * * *
 */
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

/**
 * 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
 */
for (let i = 1; i <= 10; i++) {
  const n = 3;
  console.log(`${3} x ${i} = ${n * i}`);
}

/**
 * 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
 */
function oddSum() {
  let sum = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log("Odd sum 1 to 500: ", sum);
}
oddSum();

/**
 * 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
 */
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

/**
 * 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
 */
function reverseNum(num) {
  let reverseDigit = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverseDigit = reverseDigit * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reverseDigit;
}
console.log(reverseNum(6789));

/**
 * 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
 */
//use for loop when we know exact number of iteration
//use while when we not know exact iteration number but for to satisfy a condition
//same as while but it will run at least one iteration
