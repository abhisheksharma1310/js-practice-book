/**
 * K’th Smallest/Largest Element in Unsorted Array
 */

function kthSmallest (arr, k) {
    arr.sort((a,b) => a-b);
    let smallest = arr[0];
    let i = 0;
    let count = 1;
    while((count < k && i <= arr.length)){
        if(arr[i] > smallest){
            smallest = arr[i];
            count++;
        }
        i++;
    }
    return smallest;
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallest([7, 7, 7, 7, 7, 2, 8], 3));