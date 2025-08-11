// count vowels in given string

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str.charAt(i))) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Helloo world")); //4
console.log(countVowels("ThE quIck brOwn fOx")); // 5
console.log(countVowels("Brrrp"));
