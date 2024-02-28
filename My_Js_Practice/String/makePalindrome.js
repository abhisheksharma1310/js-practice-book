/**
 * Minimum number of deletions to make a string palindrome
 */

function makePalindrome (str) {
    return funForDelete(str, 0, str.length-1);
}

function funForDelete (str, i, j){
    if( i >= j) return 0;
    if(str[i] === str[j]){
        return funForDelete(str, i+1, j-1);
    }
    return 1 + Math.min(funForDelete(str, i+1, j), funForDelete(str, i, j-1));
}

console.log(makePalindrome("abefbac"));