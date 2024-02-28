/**
 * Find the Missing Number
 */

function findMissingNumber (arr){
    const set = new Set([...arr]);
    for(let i=1; i<=arr.length+1; i++){
        if(!set.has(i)) return i;
    }
}
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]));

function findMissingNumber1 (arr) {
    const n = arr.length+1;
    const nSum = (n*(n+1))/2;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return nSum - sum;
}
console.log(findMissingNumber1([1, 2, 4, 6, 3, 7, 8]));