class Person {
  constructor(name) {
    this.name = name;
    this.fn = this.fn.bind(this); //bind this to fn propert
  }
  fn() {
    console.log(this.name);
  }
}

const person = new Person("Abhishek");
const copyFn = person.fn;
copyFn();

const person1 = {
  name: "Abhishek",
  fn: function () {
    //console.log(this);
    console.log(this.name);
  },
};

const fnCopy = person1.fn;
fnCopy();
