/**
 * Program to print the given digit in words
 */

function digitToWord(digits) {
  const numbers = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  let res = "";
  while (digits > 0) {
    const digit = digits % 10;
    res = `${numbers[digit]} ${res}`;
    digits = Math.floor(digits / 10);
  }
  return res;
}

console.log(digitToWord(1234));
console.log(digitToWord(563702810));

function digitToWord2(digits) {
  const numbers = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  let res = "";
  digits = digits.toString().split("");
  for (let digit of digits) {
    res += `${numbers[digit]} `;
  }
  return res;
}

console.log(digitToWord2(1234));
console.log(digitToWord2(563702810));
