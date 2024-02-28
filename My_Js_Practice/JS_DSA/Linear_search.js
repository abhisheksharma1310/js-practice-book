/**
 * Linear search
 * Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
 * Return -1 if the target element is not found.
 * arr = [-5,2,10,4,6], t = 10 -> should return 2
 */
//Time complexity: O(n) linear
function linearSearch(arr, target) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([1,3,5,2,9,11], 12));