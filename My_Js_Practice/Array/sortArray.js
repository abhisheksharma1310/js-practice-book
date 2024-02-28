/**
 * Write a program to sort the given array
 */

function sortArray (arr) {
    return arr.sort((a,b) => a-b);
}
//console.log(sortArray([2,4,8,9,3,7,0,12,45,98]));

function sortArrayB (arr) {
    let swapped = true;
    while(swapped){
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            } else {
                swapped = false;
            }
        }
    }
    return arr;
}
console.log(sortArrayB([2,4,8,9,3,7,0,12,45,98]));
