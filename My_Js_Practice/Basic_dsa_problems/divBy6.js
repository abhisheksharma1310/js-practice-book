/**
 * Check if a large number is divisible by 6 or not
 */

function divBy6 (num) {
    return num % 6 === 0;
}

console.log(divBy6(363588395960667043875487));
console.log(divBy6(2112));
console.log(divBy6(1124));

function divBy6Big (num) {
    const lastDigit = num % 10;
    //check if last digit divisible 2 or not
    if(lastDigit % 2 !== 0) return false;
    //if last digit divisible by 2 check is it also divisible by 3
    let sum = 0;
    while(num > 0) {
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num/10);
    }
    return sum % 3 === 0;
}

console.log(divBy6Big(363588395960667043875487));