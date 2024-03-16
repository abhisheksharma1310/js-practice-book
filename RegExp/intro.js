/**
 * The method str.match(regexp) finds all matches of regexp in the string str.
 * It has 3 working modes:
 */

//1. If the regular expression has flag g, it returns an array of all matches:

let str = "We will, we will rock you";
console.log(str.match(/we/gi)); // We,we (an array of 2 substrings that match)

//2. If there’s no such flag it returns only the first match in the form of an array, with the full match at index 0 and some additional details in properties:

let result = str.match(/we/i); // without flag g

console.log(result[0]); //We (1st match)
console.log(result.length); //1

//Details:
console.log(result.index); // 0 (position of the match)
console.log(result.input); // We will, we will rock you (source string)

//3. And, finally, if there are no matches, null is returned (doesn’t matter if there’s flag g or not).

let matches = "JavaScript".match(/HTML/);

if (!matches.length) {
  // Error: Cannot read property 'length' of null
  console.log("Error in the line above");
}

let matches1 = "JavaScript".match(/HTML/) || [];

if (!matches1.length) {
  alert("No matches"); // now it works
}

// no flag g
console.log("We will, we will".replace(/we/i, "I")); // I will, we will

// with flag g
console.log("We will, we will".replace(/we/gi, "I")); // I will, I will

/**
 * Symbols	Action in the replacement string
$&	inserts the whole match
$`	inserts a part of the string before the match
$'	inserts a part of the string after the match
$n	if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups
$<name>	inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups
$$	inserts character $
 */

console.log("I love HTML".replace(/HTML/, "$& and JavaScript")); // I love HTML and JavaScript

//Testing: regexp.test
let str1 = "I love JavaScript";
let regexp = /LOVE/i;

alert(regexp.test(str1)); // true
