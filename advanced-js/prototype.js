
function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
} 

const person1 = new Person('Abhishek', 'Sharma');
const person2 = new Person('Rohit', 'Singh');
const person3 = new Person('Raj', 'Sharma');

Person.prototype.getFullName = function() {
    return `${this.fName} ${this.lName}`;
}

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());

// protoypal inheritance
function SuperHero(fName, lName) {
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fight = function() {
    console.log("Fighting");
}
SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero;
console.log(batman);
console.log(batman.getFullName());


