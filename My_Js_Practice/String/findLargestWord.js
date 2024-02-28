/**
 * Find largest word in dictionary by deleting some characters of given string
 */

function findLargestWord (dict, str) {
    let largest = "";
    for(let i=0; i<dict.length; i++){
        const curr = dict[i];
        let count = 0;
        for(let j=0; j<curr.length; j++){
            if(str.includes(curr[j])) count++;
        }
        if(count === curr.length) {
            if(curr.length > largest.length || (curr.length === largest.length && curr < largest)) largest = curr;
        }
    }
    return largest;
}
console.log(findLargestWord(["ale", "apple", "monkey", "plea"], "abpcplea"));