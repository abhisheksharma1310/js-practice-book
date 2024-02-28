/**
 * Program to cyclically rotate an array by one
 */

function CyclicRotate (arr) {
    const last = arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(CyclicRotate([1,2,3,4,5]));

function CyclicRotate1 (arr) {
    const res = [arr[arr.length-1]];
    for(let i=0; i<arr.length-1; i++){
        res[i+1] = arr[i];
    }
    return res;
}
console.log(CyclicRotate([1,2,3,4,5]));

function CyclicRotate2 (arr) {
    let i = 0;
    let j = arr.length-1;
    while(i != j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
    }
    return arr;
}
console.log(CyclicRotate2([1,2,3,4,5]));