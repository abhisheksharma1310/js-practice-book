/**
 * 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
At the Global
Inside an Object Method
Inside the Satandalone non-Arrow Function
Inside an Arrow Function(standalone)
Inside an Arrow Function(as object method)
Inside an object created with the Constructor Function
Please add examples for each of the scenarios.
 */
//situation => value
//1. At the global level => window object
//ex:
console.log(this);
//2. Inside an Object Method => object itself
//ex:
const obj = {
  name: "abhishek",
  age: 25,
  getDetail: function () {
    console.log(`${this.name} is ${this.age} years old.`);
  },
};
obj.getDetail();
//3. Inside the Satandalone non-Arrow Function => window object
//ex:
function func() {
  console.log("This Inside the Satandalone non-Arrow Function", this);
}
func();
//4. Inside an Arrow Function(standalone) => window object
const arrowFunc = () =>
  console.log("Inside an Arrow Function(standalone)", this);
arrowFunc();
//5. Inside an Arrow Function(as object method) => window object
//ex:
const obj1 = {
  name: "Raj",
  age: 27,
  getDetails: () => {
    console.log("this inside arrow function as method", this);
  },
};
obj1.getDetails();
//6. Inside an object created with the Constructor Function => newly created object instance
function Person(name, age) {
  this.name = name;
  this.sayName = function () {
    console.log("name is: ", this.name);
  };
}
const person = new Person("abhishek", 25);
console.log(person.name);

/**
 * 2. What is the problem here? Fix it to log the correct name and explain the fix
 */
const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
  greet2: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

user.greet();
user.greet2()();
//to access this in object method we shold not use arrow function beacuse it refers to objects parents which is window object in this case. I can wrap arrow function inside normal function if still want to use arrow function.

/**
 * 3. Can you explain what is the problem here and fix the issue to log the correct name?
 */
const obj3 = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj3.greet;
greetFn.call(obj3);

/**4. What is the problem with the following code? Why isn't it logging the name correctly? */
const user1 = {
  name: "Alex",
  greet: function () {
    const self = this;
    function inner() {
      //console.log(`Hello, ${this.name}!`);
      console.log(`Hello, ${self.name}!`);
    }
    //inner.call(this);
    inner();
  },
};
user1.greet();
//nested inner function refers to window object not user1 object.

/**
 *5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details
 */
function Sports(name, number) {
  this.name = name;
  this.number = number;
}
const cricket = new Sports("Cricket", 1);
console.log(cricket);

const hockey = new Sports("Hockey", 2);
console.log(hockey);

/**
 * 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
 */
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
car2.describe = car1.describe;
car1.describe.call(car2); // we can use apply and bind also
console.log(car2.describe());

/**
 * 7. What will be the output of the following code and why?
 */
const person1 = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name); //Charlie
  },
  sayHelloArrow: () => {
    console.log(this.name); //""
  },
};

person1.sayHello();
person1.sayHelloArrow();
// "Charlie" and "" (empty string)
