function pairElement(str) {
  const basePair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const pair = [str[i], basePair[str[i]]];
    result.push(pair);
  }
  return result;
}

console.log(pairElement("CTCTA"));
