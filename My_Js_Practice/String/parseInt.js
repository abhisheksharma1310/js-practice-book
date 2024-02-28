/**
 * Write your own atoi() in c
 * function that find valid integer from string
 */

function findString (str) {
    const int = +str;
    if(!Number.isNaN(int)) {
        return int;
    } else {
        return 0;
    }
}
console.log(findString("1"));