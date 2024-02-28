/**
 * Find Excel column name from a given column number
 */

function ExcelColumnName (num) {
    let res = [];
    while(num > 0){
        let rem = num % 26;
        if(rem === 0) {
            res.push("Z");
            num = Math.floor(num/26) - 1;
        } else {
            res.push(String.fromCharCode((rem) + "A".charCodeAt(0) - 1));
            num = Math.floor(num/26);
        }
    }
    return res.reverse().join("");
}
console.log(ExcelColumnName(705));