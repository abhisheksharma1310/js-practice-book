/**
 * Write a program to reverse an array or string
 */

function reverseArray (arr) {
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;
        start++;
        end--;
    }
    return arr.join("");
}

const str = "plhckq";
//console.log(reverseArray(str.split("")));
