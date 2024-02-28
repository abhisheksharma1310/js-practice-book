/**
 * Problem: Give a positive integer "n" determine if the number is a power of two or not.
 * An integer is a power of two if there exists an integer "x" such that "n" === 2^x
 * isPowerOfTwo(1) = true (2^0)
 * isPowerOfTwo(2) = true (2^1)
 */
//Time complexity: O(logn) logrithmic
function isPowerOfTwo(input) {
    if(input < 1) return  false;
    while(input>1){
        if(input%2 !== 0) return false;
        input = input/2;
    }
    return true;
}

//Time complexity: O(1) constant
function isPowerOfTwoBitWise(input){
    if(input < 1) return false;
    return (input & (input-1)) === 0;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwoBitWise(4));