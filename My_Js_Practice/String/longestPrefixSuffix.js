/**
 * Longest prefix which is also suffix
 */

function prefixSuffix (str) {
    const length = Math.ceil(str.length/2);
    let count = 0;
    for(let i=0; i<length; i++){
        if(str[i] === str[length+i]){
            count++;
        }
    }
    return count;
}
console.log(prefixSuffix("aabcbaabc"));