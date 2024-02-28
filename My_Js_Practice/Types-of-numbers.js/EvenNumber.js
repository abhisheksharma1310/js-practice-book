/**
 * Even Numbers
 * A number divisible by 2.
 */

 function evenNumber(inum = 0, count= 100) {
    for(inum = 0; inum < count; inum = inum+2){
        console.log(inum);
    };
};

evenNumber();

function isEvenNumber(num) {
    if(num%2 === 0){
        return true;
    } else {
        return false;
    }
};

console.log(isEvenNumber(87));