/**
 * Spread operator
 * object
 */

const person1 = {
    name: "Abhishek Sharma",
    age: new Date().getFullYear() - 1998,
    city: "New Delhi"
};

const perosn1Detail = {
    ...person1,
    city: "Patna",
    nickName: "prince",
    hobby: "Read Tech News"
}

perosn1Detail.name = "kumar";

console.log("person1Detail: ", perosn1Detail);

console.log("person1 ", person1);

/**
 * Spread operator
 * array
 */

const arr = ["one", "two", "three", "four", "five"];

const arrValue = [ "zero", ...arr, "six", "seven"]

console.log("arrvalue: ", arrValue);