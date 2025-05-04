/**
 * find word in dictionary
 */

class Dictionary {
  constructor(words) {
    this.words = words;
  }

  isInDict(query) {
    // onvert query to a regex pattern
    // Replace * with . (regex any one character)
    const pattern = query.replace(/\*/g, ".");

    //Ensure full-word match
    const regex = new RegExp(`^${pattern}$`);

    // check against all disctionary words
    return this.words.some((word) => regex.test(word));
  }
}

const test = new Dictionary(["cat", "car", "bar"]);

console.log(test.isInDict("cat")); // true
console.log(test.isInDict("*at")); // true
console.log(test.isInDict("*a*")); // true
console.log(test.isInDict("don")); //false
