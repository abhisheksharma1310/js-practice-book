/**
 * Check if two strings are k-anagrams or not
 */

//function for K Anagram
function KAnagram (str1, str2, k) {
    //if string1 not equal to string2 return false
    if(str1.length !== str2.length) return false;
    //sort both string
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    //variable for counting different characters in string
    let d = 0;
    //traverse through all the string character
    for(let i=0; i<str1.length; i++){
        //if string1 ith character not equal string2 ith character increment count d
        if(str1[i] !== str2[i]) d++;
    }
    //check if d less or equal to k return true else return false
    return d <= k;
}

console.log(KAnagram("anagram", "grammar", 3));