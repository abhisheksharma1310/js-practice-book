/**
 * Find Subarray with given sum | Set 1 (Non-negative Numbers)
 */

function SubarraySum (arr, sum) {
    for(let i=0; i<arr.length; i++){
        let subArrSum = 0;
        for(let j=i; j<arr.length; j++){
            subArrSum += arr[j];
            if(subArrSum == sum) return [i,j];
        }
    }
    return -1;
}

console.log(SubarraySum([1, 4, 0, 0, 3, 10, 5], 7));
console.log(SubarraySum([135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134], 468))