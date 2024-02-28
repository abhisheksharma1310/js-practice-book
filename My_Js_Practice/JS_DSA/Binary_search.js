/**
 * Binary search
 * Problem: Given array of "n" elenents and a target element "t", find the index of "t" in the array. 
 * Return -1 if the target elements is not found.
 * arr = [-5,2,4,6,10], t = 10, should return 4  
 */
//Time complexity: O(logn) logrithmic
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;
        if(arr[mid] > target) right = mid-1;
        if(arr[mid] < target) left = mid+1;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,8,9,23,56,89], 8));

/**
 * Use recursive method
 */
//Time complexity: O(logn) logrithmic
function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length-1);
    function search(arr, target, left, right) {
        if(left > right) return -1;
        let mid = Math.floor((left+right)/2);
        if(target === arr[mid]) return mid;
        if(target < arr[mid]) return search(arr, target, left, mid-1);
        if(target > arr[mid]) return search(arr, target, mid+1, right);
    }
}

console.log(recursiveBinarySearch([1,2,3,4,5,8,9,23,56,89], 8));
