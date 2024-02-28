/**
 * Count pairs with given sum
 */

function pairSum (arr, k) {
    const res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == k) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    return res.length;
}
console.log(pairSum([1, 5, 7, -1], 6));
console.log(pairSum([1, 5, 7, -1, 5], 6));

function pairSum1 (arr, k) {
    const map = new Map();
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(map.has(k-arr[i])){
            count += map.get(k-arr[i]);
        }
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return count;
}
console.log(pairSum1([1, 5, 7, -1, 5], 6));