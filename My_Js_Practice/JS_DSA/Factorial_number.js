/**
 * Problem: Give an integer "n", find the factorial of that integer
 * In mathematics, the factorial of an non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n".
 * Factorial of zero is 1.
 * Factorial(4) = 4*3*2*1 = 24
 * Factorial(5) = 5*4*3*2*1 = 120
 */
//Time complexity: O(n) linear
function Factorial(input) {
    let result = 1;
    for(let i=2; i<=input; i++){
        result *= i;
    }
    return result;
}

console.log(Factorial(5));

/**
 * Use recursive method.
 */

function recursiveFactorial(n){
    if(n === 0) return 1;
    return n*recursiveFactorial(n-1);
}

console.log(recursiveFactorial(5));