/**
 * Longest Common Prefix using Sorting
 */

function LongestPrefix (arr) {
    const size = arr.length;
    //if arr is empty
    if(size === 0) return "";
    //if there is only one item
    if(size === 1) return arr[0];
    //sort the array
    arr.sort();
    //find the smallest word length
    const sm = Math.min(arr[0].length, arr[size-1].length);
    //check longest common prefix
    let i = 0;
    while(i < sm && arr[0][i] === arr[size-1][i]) i++;
    //return longest common prefix
    return arr[0].substring(0, i);
}

const str1 = ["geeksforgeeks", "geeks", "geek", "geezer", "ge"];

console.log(LongestPrefix(str1));