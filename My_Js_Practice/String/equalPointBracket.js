/**
 * Find an equal point in a string of brackets
 */

function equalPoint (str) {
    const len = str.length;
    let count = 0;
    for(let i=0; i<len; i++){
        if(str[i] === ")") count++;
    }
    return count;
}

console.log(equalPoint("(())))("));
console.log(equalPoint("))"));
console.log(equalPoint("(()))(()()())))"));