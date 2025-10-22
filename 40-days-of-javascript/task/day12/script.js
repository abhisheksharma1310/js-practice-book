/**
 * 1. What will be the output and why?
 */
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
//Not provided

/**
 * 2. What will happen if we try to modify a frozen object?
 */
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); //1

/**
 * 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
 */
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
const {
  name,
  company,
  company: {
    location: { city },
  },
} = person;
console.log(name, company, city);

/**
 * 4. Build a Student Management System
 * Store student details in an object (name, age, grades).
 * Implement a method to calculate the average grade.
 */
const Student = {
  name: "Abhishek Sharma",
  age: 25,
  grades: [65, 55, 76, 87, 98],
  calculateAverageGrades() {
    return (
      this.grades.reduce((acc, grade, i) => {
        return (acc += grade);
      }) / this.grades.length
    );
  },
};
console.log(Student.name, Student.calculateAverageGrades());

/**
 * 5. Book Store Inventory System
 * Store books in an object.
 * Add functionality to check availability and restock books.
 */
const bookStore = {
  inventory: {
    "The Pragmatic Programmer": { quantity: 4, price: 550 },
    "Clean Code": { quantity: 2, price: 600 },
    "JavaScript: The Good Parts": { quantity: 0, price: 450 },
  },
  checkAvailability(bookTitle) {
    const book = this.inventory[bookTitle];
    if (!book) {
      console.log(`"${bookTitle}" is not in our inventory.`);
    } else if (book > 0) {
      console.log(`"${bookTitle}" is available (${book.quantity} in stock).`);
    } else {
      console.log(`"${bookTitle}" is currently out of stock.`);
    }
  },
  restockBook(bookTitle, quantity = 0, price = 0) {
    const book = this.inventory[bookTitle];
    if (!book) {
      console.log(`Adding new book "${bookTitle}" to inventory.`);
      this.inventory[bookTitle] = { quantity: quantity, price: price };
    } else {
      this.inventory[bookTitle].quantity += quantity;
      console.log(
        `Restocked "${bookTitle}". New quantity: ${this.inventory[bookTitle].quantity}`
      );
    }
  },
};
bookStore.checkAvailability("Clean Code");
bookStore.restockBook("JavaScript: The Good Parts", 5);
bookStore.checkAvailability("JavaScript: The Good Parts");
bookStore.restockBook("Refactoring", 3);
bookStore.checkAvailability("Refactoring");

/**
 * 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
 */
//Object.keys() gives all keys of an object
//Object.entries gives an array which includes all key and value of object in an array
const obj1 = {
  name: "abhishek",
  age: 25,
};
console.log(Object.keys(obj1));
console.log(Object.entries(obj1));

/**
 * 7. How do you check if an object has a certain property?7. How do you check if an object has a certain property?
 */
//we can use Object.hasOwn property;
console.log(Object.hasOwn(obj1, "name")); //true

/**
 * 8. What will be the output and why?
 */
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name); //Doe beacuse reference object's value changed

/**
 * 9. What’s the best way to deeply copy a nested object? Expalin with examples
 */
//To deeply copy nested object we should use structuredClone
const obj2 = structuredClone(obj1);
obj2.name = "raj";
console.log(obj2, obj1);

/**
 * 10. Loop and print values using Object destructuiring
 */
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];
for (let { name, address, age } of users) {
  console.log(name, age, address);
}
