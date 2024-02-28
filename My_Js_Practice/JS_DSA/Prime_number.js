/**
 * Problem: Give a natural number "n", determine if the number is prime or not.
 * A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * isPrime(1) = false   
 * isPrime(5) = true (1*5 or 5*1)
 * isPrime(4) = false (1*4 or 2*2 or 4*1)
 */
//Time complexity: O(n^1/2) sqrt of n
function isPrime(input){
    if(input<2) return false;
    for(let i=2; i<=Math.sqrt(input); i++){
        if(input%i === 0) return false;
    }
    return true;
}

console.log(isPrime(3))