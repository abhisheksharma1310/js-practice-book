/**
 * Odd Numbers
 * A number divisible by 2.
 */

 function oddNumber(inum = 1, count= 100) {
    for(inum = 1; inum < count; inum = inum+2){
        console.log(inum);
    };
};

oddNumber();

function isOddNumber(num) {
    if(num%2 != 0){
        return true;
    } else {
        return false;
    }
};

console.log(isOddNumber(87));