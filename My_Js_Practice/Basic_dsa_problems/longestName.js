/**
 * Display the Longest Name
 */

function LongestName (names) {
    let longest = [""];
    for(name of names){
        if(name.length > longest[0].length) {
            longest = [];
            longest[0] = name;
        } else if(name.length === longest[0].length){
            longest.push(name);
        }
    }
    return longest.toString();
}

console.log(LongestName(["GeeksforGeeks", "FreeCodeCamp", "StackOverFlow",  "MyCodeSchool"]));
console.log(LongestName(["Akash", "Adr"]));