//Longest word in an given sentence

//Constraints:
//The input string may contain alphabetic characters, digits, spaces, and punctuations.
// The input string is non empty
// The input string may contain multiple word seperated by spaces.

// Note:
// If the input string is empty or contain only whitespace, the function should return false.
// The function should ignore leading and trailing spaces.

function findLogestWord(str) {
  if (str.trim().length === 0) return false;
  const strArr = str.trim().split(" ");
  let maxWord = "";
  for (word of strArr) {
    if (word.length > maxWord.length) maxWord = word;
  }
  return maxWord;
}

//alternate methods

function findLogestWord1(str) {
  if (str.trim().length === 0) return false;
  const words = str.trim().split(" ");
  //return words.sort( ( a, b ) => b.length - a.length ).at( 0 );

  //using reduce
  return words.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
  }, "");
}

console.log(findLogestWord(" 100 Days of JavaScript Coding Challenges    "));
console.log(findLogestWord1(" 100 Days of JavaScript Coding Challenges    "));
