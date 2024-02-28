/**
 * Program for average of an array (Iterative and Recursive)
 */

function arrayAverage (arr) {
    sum = 0;
    size = arr.length;
    for(let i=0; i<size; i++) {
        sum += arr[i];
    }
    return Number(sum/size).toFixed(2);
}

console.log(arrayAverage([1, 2, 3, 4, 5]));
console.log(arrayAverage([5, 3, 6, 7, 5, 3]));

function arrayAverageR (arr) {
    return avgR(arr, 0, arr.length);

    function avgR (arr, i , n) {
        //if i is last 
        if(i === n-1 ){
            return arr[i];
        }
        //if i is first
        if(i === 0){
            return ((arr[i] + avgR(arr, i+1, n)) / n);
        }
        //cumpute sum 
        return (arr[i] + avgR(arr, i+1, n));
    }
}

console.log(arrayAverageR([1, 2, 3, 4, 5]));
console.log(arrayAverageR([5, 3, 6, 7, 5, 3]));