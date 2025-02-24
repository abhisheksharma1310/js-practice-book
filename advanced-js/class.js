
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    sayMyName() {
        console.log(this.fName + ' ' + this.lName);
    }
}

const classP1 = new Person("Abhishek", "Sharma");
console.log(classP1.sayMyName());   

// class inheritance
class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }
    fightCrime() {
        console.log(this.fName + ' is fighting crime');
    }
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.sayMyName());
console.log(batman.fightCrime());

