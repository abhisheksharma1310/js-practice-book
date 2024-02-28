/**
 * Smallest window in a String containing all characters of other String
 */

function SmallestWindow(str, pat) {
  let smallestSubStr = "";
    for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length - 1; j++) {
        let subStr = str.substring(j, j+1);
        if(subStr.includes(pat)){
            if(subStr.length < smallestSubStr.length){
                smallestSubStr = subStr;
            }
        }
    }
  }
  return smallestSubStr;
}
console.log(SmallestWindow("this is a test string", "tist"));
console.log("this is a test string".includes("tist"));