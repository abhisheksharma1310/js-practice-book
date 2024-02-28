/**
 * Program for Sum of the digits of a given number
 */

function sumOfDigits (num) {
    let sum = 0;
    while(num > 0){
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigits(6817));

function sumOfDigitsR (num) {
    if(num === 0) return  0;
    return (num % 10) + Math.floor(sumOfDigitsR(num/10));
}

console.log(sumOfDigitsR(6817));