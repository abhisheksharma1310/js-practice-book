/**
 * Array destructuring
 */

const arr = ["one", "two", "three", "four", "five"];

const arrValue = ([el1, el2, , , el5]) => {
    console.log("Array Element Log: ", el1, el2, el5);
};

arrValue(arr);

/**
 * Object destructuring
 */

const obj = {
    name: "Abhishek Sharma",
    age: new Date().getFullYear() - 1998,
    address: "New Delhi"
};

const objValue = ({name, age, address}) => {
    console.log(`I am ${name} from ${address}. I am ${age} years old`);
};

objValue(obj);
