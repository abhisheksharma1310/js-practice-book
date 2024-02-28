/**
 * Write a program to reverse digits of a number
 */

function reverseDigits (num) {
    let reverse = 0;
    while(num > 0) {
        reverse = (reverse*10) + num%10;
        num = Math.floor(num/10);
    }
    return reverse;
}

console.log(reverseDigits(432001));