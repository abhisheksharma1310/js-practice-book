//Hash Tag Generator

// You are required to implement a function generateHash that generates a hash tag from a given input string.

//The hastag should follow these rules
// The input string should be converted to hastag format, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, then return false.

function generateHash(str) {
  if (str.trim().length === 0 || str.trim().length > 280) return false;

  const strArr = str.trim().split(" ");

  return strArr.reduce(
    (acc, word) =>
      (acc +=
        typeof word === "string"
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word),
    "#"
  );
}

console.log(generateHash("My naMe is AbhiSHek 1"));
