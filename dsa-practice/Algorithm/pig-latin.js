function translatePigLatin(str) {
  const vowels = "aeiou";
  if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        return str.slice(i) + str.slice(0, i) + "ay";
      }
    }
    return str + "ay";
  }
}

console.log(translatePigLatin("consonant"));
