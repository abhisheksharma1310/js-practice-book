/**
 * Find the first repeating element in an array of integers
 */

function firstRepeat(arr) {
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
}
console.log(firstRepeat([10, 5, 3, 4, 3, 5, 6]));
console.log(firstRepeat([6, 10, 5, 4, 9, 120, 4, 6, 10]));