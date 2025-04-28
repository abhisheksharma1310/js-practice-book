function convertHTML(str) {
  let str1 = str.split("");
  const html = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  for (let i = 0; i < str.length; i++) {
    if (html.hasOwnProperty(str1[i])) {
      str1[i] = html[str1[i]];
    }
  }
  //console.log(str1.join(""));
  return str1.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
