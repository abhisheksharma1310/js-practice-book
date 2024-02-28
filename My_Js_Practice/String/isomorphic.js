/**
 * Check if two given Strings are Isomorphic to each other
 */

function Isomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    if (map.hasOwnProperty(str1[i])) {
      if (map[str1[i]] !== str2[i]) return false;
    } else if (!Object.values(map).includes(str2[i])) {
      map[str1[i]] = str2[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(Isomorphic("aac", "xxy"));
console.log(Isomorphic("aac", "xzy"));