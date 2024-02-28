/**
 * Encrypt the string – 2
 */

function EncryptString(str) {
    //store string length
    const size = str.length;
    //initialize variable for final string result
    let res = "";
    //initialize variable for character frequency
    let freq = 1;
    //traverse through each character of the string
    for(let i=0; i<size; i++){
        //if the previous character is equal to the next character increment frequency variable
        if(str[i] === str[i !== size ? i+1 : i]){
            freq++;
        } else {
            //variable for hexadecimal equivalent of frequency character
            const hx = freq.toString(16);
            //append result in the result variable
            res = `${hx}${str[i]}${res}`;
            //reinitialize frequency variable
            freq = 1;
        }
    }
    //return the result
    return res;
}

console.log(EncryptString("aaaaaaaaaaa"));
console.log(EncryptString("abc"));