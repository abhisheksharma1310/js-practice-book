/**
 * K’th Smallest/Largest Element in Unsorted Array
 */

function kthLargest (arr, k) {
    arr.sort((a,b) => a-b);
    const size = arr.length;
    let largest = arr[size-1];
    let count = 1;
    let i = size-2;
    while(count < k && i >= 0){
        if(arr[i] < largest){
            largest = arr[i];
            count++;
        } 
        i--;
    }
    return largest;
}

//console.log(kthLargest([7, 10, 4, 3, 20, 15], 3));
console.log(kthLargest([7, 10, 15, 15, 20, 15], 3));