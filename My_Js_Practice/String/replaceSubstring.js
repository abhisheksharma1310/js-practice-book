/**
 * How to replace a substring of a string
 */

function replaceSubString (s1, s2, s3) {
    const regexp = new RegExp(`${s2}`,`g`);
    const res = s1.replace(regexp, s3);
    return res;
}
console.log(replaceSubString("abababa", "aba", "a"));
console.log(replaceSubString("geeksforgeeks", "eek", "ok"));