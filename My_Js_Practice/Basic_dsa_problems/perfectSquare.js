/**
 * Check if given number is perfect square
 */

function perfectSquare(num) {
    const sqrt = Math.floor(Math.sqrt(num));
    return sqrt*sqrt === num;
}

console.log(perfectSquare(2500));
console.log(perfectSquare(2555));

function perfectSquare1 (num) {
    return Math.floor(Math.sqrt(num)) === Math.ceil(Math.sqrt(num));
}

console.log(perfectSquare1(2500));
console.log(perfectSquare1(2555));

function isPerfectSqrt (num) {
    //base case 0 and 1 are perfect square
    if(num <= 1) {
        return true;
    }
    // Initialize boundaries for binary search
    let left = 1, right = num;
    //while left <= right
    while(left <= right){
        let mid = Math.floor((left + (right - left)/2));
        let square = mid*mid;
         // If the square matches num, num is a perfect square
        if(square === num){
            return true;
        } else if( square < num) {
            // If the square is smaller than num, search the right half
            left = mid + 1;
        } else {
            // If the square is larger than num, search the left half
            right = mid - 1;
        }
    }
    // If the loop completes without finding a perfect square, num is not a perfect square
    return false;
}

console.log(isPerfectSqrt(2500));
console.log(isPerfectSqrt(2555));
