/**
 * QuickSort – Data Structure and Algorithm Tutorials
 */

function quickSort (arr) {
    if(arr.length < 2) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([4,2,0,-4, 2, -2, 3, -1, 9, 7]));