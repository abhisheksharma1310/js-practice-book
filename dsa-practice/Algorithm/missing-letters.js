function fearNotLetter(str) {
  let first = str.charCodeAt(0);
  for (let i = 0; i < str.length; i++, first++) {
    if (str.charCodeAt(i) != first) {
      return String.fromCharCode(first);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
