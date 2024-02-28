/**
 * Bubble Sort
 */
//Time complexity: O(n^2) quadratic
function bubbleSort (arr) {
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

console.log(bubbleSort([-6, 20, 8, -2, 4]));