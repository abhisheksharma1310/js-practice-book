/**
 * Truncate string.
 */

function Truncate(str, maxLength){
    if(str.length>maxLength){
        return str.slice(0, maxLength)+"...";
    } else {
        return str;
    }
}

console.log(Truncate("Subscribe to RoadsideCoder", 9));