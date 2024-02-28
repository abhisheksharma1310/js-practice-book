/**
 * Segregate 0s and 1s in an array
 */

function Segregate (arr) {
    const zeros = [], ones = [];
    for(el of arr){
        if(el === 0) zeros.push(el);
        if(el === 1) ones.push(el);
    }
    return [...zeros, ...ones];
}

console.log(Segregate([0, 1, 0, 1, 0, 0, 1, 1, 1, 0,5,1] ));