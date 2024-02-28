/**
 * Program to find the minimum (or maximum) element of an array
 */
function minMax (arr) {
    let min = arr.sort((a,b) => a-b)[0];
    let max = arr[arr.length - 1];
    return `Min: ${min}, Max: ${max}`;
}
//console.log(minMax([1,3,2,4,7,0,9,5,8]));

function minMaxL (arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    return `Min: ${min}, Max: ${max}`;
}
//console.log(minMaxL([1,3,2,4,7,0,9,5,8,11]));
