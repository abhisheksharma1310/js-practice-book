/**
 * License Key Formatting
 */

function format(str, k) {
  const s = str.split("-");
  let s1 = s[0] + "-";
  const s2 = str.slice(s1.length).split("");
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    if (count < k) {
        if(s2[i] !== "-"){
            s1 += s2[i];
            count++;
        }
    } else {
      s1 += "-";
      count = 0;
    }
  }
  return s1.toUpperCase();
}
console.log(format("5F3Z-2e-9-w", 4));
console.log(format("2-5g-3-J", 2));
