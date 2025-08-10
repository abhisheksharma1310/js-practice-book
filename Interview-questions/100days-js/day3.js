//Count Occurrences of character

//Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appers in the string.

//ex: MissIssippi, I //4

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let count = 0;

  for (el of str) {
    if (el == char) {
      count++;
    }
  }
  return count;
}

// alternate
function countChar1(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.split("").reduce((acc, el) => (el == char ? acc++ : acc), 0);
}

console.log(countChar("MissIssippi", "I"));
