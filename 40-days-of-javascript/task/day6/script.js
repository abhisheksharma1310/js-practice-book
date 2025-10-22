/**
 * 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(35.5));

/**
 * 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
 */
function maxNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(maxNum(20, 30));
console.log(maxNum(20, -30));

/**
 * 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
 */
function palindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(palindrome("madam"));
console.log(palindrome("modem"));

/**
 * 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
 */
function factorial(num) {
  if (num <= 1) return num;
  return num * factorial(num - 1);
}
console.log(factorial(5));

/**
 * 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
 */
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("factorial"));

/**
 * 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
 */
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("my name is abhishek sharma"));

/**
 * 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
 */
(function (str) {
  console.log("Hello ", str);
})("JavaScript");

/**
 * 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
 */
function great(name, callback) {
  console.log(callback(name));
}
great("abhishek sharma", capitalizeWords);

/**
 * 9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();
 */
//first f2 called then f1

/**
 * 10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
 */
//first f2, then f3, then f1, again f1 called
