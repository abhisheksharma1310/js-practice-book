/**
 * String interpolation using ``.
 */

const name = "Abhishek Sharma";

const age = () => {
    const old =  new Date().getFullYear() - 1998;
    return old;
};

const city = "New Delhi";

const myDetail = `I am ${name} form ${city}. and I am ${age()} years old.`;

console.log(myDetail);
