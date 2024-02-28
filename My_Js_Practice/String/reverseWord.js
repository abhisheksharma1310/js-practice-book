/**
 * Reverse words in a given string
 */

function ReverseWord (str) {
    return str.split(" ").reverse().join(" ");
}

console.log(ReverseWord("geeks quiz practice code"));

function ReverseWord1 (str) {
    str = str.split(" ");
    let res = ""
    for(let word of str){
        res = `${word} ${res}`;
    }
    return res;
}

console.log(ReverseWord1("geeks quiz practice code"));
console.log(ReverseWord1("i.like.this.program.very.much"));