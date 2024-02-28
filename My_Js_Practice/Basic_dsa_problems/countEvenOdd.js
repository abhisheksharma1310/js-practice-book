/**
 * Count number of even and odd elements in an array
 */

function countEvenOdd (nums) {
    let even = 0, odd = 0;
    nums.forEach((num) => {
        if(num & 1 == 1){
            odd++;
        } else {
            even++;
        }
    })
    return `Even number: ${even} and Odd number: ${odd}`;
}

console.log(countEvenOdd([2, 3, 4, 5, 6]));

function countEvenOdd2(nums) {
    let even = 0, odd = 0;
    nums.forEach((num) => {
        if(num % 2 === 0){
            even++;
        } else {
            odd++;
        }
    });
    return `Even number: ${even} and Odd number: ${odd}`;
}

console.log(countEvenOdd2([2, 3, 4, 5, 6]));