/**
 * Count Distinct Subsequences
 */

function CountSubsequence(str) {
  const map = new Map();
  //Count Distinct Subsequences
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], -1);
  }
  let allCount = 0;
  let levelCount = 0;
  // Iterate from 0 to s.length()
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    // Check if i equal to 0
    if (i == 0) {
      allCount = 1;
      map.set(c, 1);
      levelCount = 1;
      continue;
    }
    // Replace levelCount with
    // allCount + 1
    levelCount = allCount + 1;
    // If map is less than 0
    if (map.get(c) < 0) {
      allCount = allCount + levelCount;
    } else {
      allCount = allCount + levelCount - map.get(c);
    }
    map.set(c, levelCount);
  }
  //return allcount
  return allCount + 1; //plus 1 for one empty space as subsequence
}

console.log(CountSubsequence("abab"));
console.log(CountSubsequence("gfg"));
console.log(CountSubsequence("ggg"));
