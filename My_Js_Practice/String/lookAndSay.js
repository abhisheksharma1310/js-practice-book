/**
 * Look-and-Say Sequence
 */

function lookAndCount(n) {
    let count = 1;
    let num = "";
    let res = "";
    for(let i=0; i<n.length; i++){
        num = n[i];
        if(n[i] == n[i+1]){
            count++;
        } else {
            res += `${count}${num}`;
            count = 1;
        }
    }
    return res;
}
function lookAndSay(n) {
    let res = "1";
    if(n === 1) return 1;
    for(let i=2; i<=n; i++){
        console.log(res);
        res = lookAndCount(res);
    }
    return res;
};
console.log(lookAndSay(10));


