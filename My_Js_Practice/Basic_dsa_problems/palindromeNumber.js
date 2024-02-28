/**
 * Check if a number is Palindrome
 */

function Palindrome (num) {
    return num.toString() === num.toString().split("").reverse().join("");
}

console.log(Palindrome(234432));

function Palindrome2 (num) {
    const str = num.toString();
    for( let i=0; i<str.length/2; i++){
        //compare ith char from start and ith char from last
        if(str[i] !== str[str.length - i - 1]) return false;
    }
    //if above equal than number is palindrome
    return true;
}

console.log(Palindrome2(234432));

function Palindrome3 (num) {
    let reverse = 0;
    while(num > 0){
        reverse = (reverse*10) + (num % 10);
        num = Math.floor(num/10);
    }
    return num === reverse;
}

console.log(Palindrome2(234432));
