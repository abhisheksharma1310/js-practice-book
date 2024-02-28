/**
 * Find Second largest element in an array
 */

function SecondLargest (arr) {
    arr.sort();
    for(let i=arr.length-1; i>0; i--){
        if(arr[i-1] < arr[i]) return arr[i-1];
    }
    return arr[0];
}

console.log(SecondLargest([12, 35, 1, 35, 35, 10, 34, 1]));
console.log(SecondLargest([2,2,2,2]));