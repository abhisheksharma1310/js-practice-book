/**
 * Find a peak element which is not smaller than its neighbours
 */

function PeekElement (arr) {
    const size = arr.length;
    if(size == 1) return 0;
    if(arr[0] >= arr[1]) return arr[0];
    if(arr[size-1] >= arr[size-2]) return arr[size-1];
    const res = [];
    for(let i=0; i<arr.length-2; i++) {
        const e1 = arr[i];
        const e2 = arr[i+1];
        const e3 = arr[i+2];
        if(e2 >= e1 && e2 >= e3) res.push(e2);
    }
    return res.toString();
}


console.log(PeekElement([5, 10, 20, 15]));
console.log(PeekElement([10, 20, 15, 2, 23, 90, 67]));
console.log(PeekElement([1,2,3]));

function PeekElementBs (arr) {
    const n = arr.length;
    let mid;
    let l = 0;
    let r = n-1;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if((mid == 0 || arr[mid - 1] <= arr[mid]) && 
        (mid == n - 1 || arr[mid + 1] <= arr[mid])) break;
        if(mid > 0 && arr[mid-1] > arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return arr[mid];
}


console.log(PeekElementBs([5, 10, 20, 15]));
console.log(PeekElementBs([10, 20, 15, 2, 23, 90, 67]));
console.log(PeekElementBs([1,2,3]));