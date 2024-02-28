/**
 * Find i’th index character in a binary string obtained after n iterations
 */

function giveNum (str) {
    let res = "";
    for(let i=0; i<str.length; i++){
        if(str[i] === "0"){
            res += "01";
        } else {
            res += "10"
        }
    }
    return res;
};

function ithString(m, i, n) {
    let res = m.toString(2);
    for(let i=0; i<n; i++){
        //res = giveNum(res);
        res = res.replace(/0/g, "01", /1/g, "10");
    }
    return res[i];
}
console.log(ithString(5, 5, 3));
console.log(ithString(11, 6, 4));