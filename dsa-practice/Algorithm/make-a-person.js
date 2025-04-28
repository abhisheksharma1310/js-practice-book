const Person = function (first, last) {
  let _firstName = first;
  let _lastName = last;
  this.getFirstName = function () {
    return _firstName;
  };
  this.getLastName = function () {
    return _lastName;
  };
  this.getFullName = function () {
    return _firstName + " " + _lastName;
  };
  this.setFirstName = function (newFirstName) {
    _firstName = newFirstName;
  };
  this.setLastName = function (newLastName) {
    _lastName = newLastName;
  };
  this.setFullName = function (newFirst, newLast) {
    _firstName = newFirst;
    _lastName = newLast;
  };
};

const ram = new Person("Ram", "Sharma");

console.log(ram.getFirstName()); // Ram
console.log(ram.getLastName()); // Sharma
console.log(ram.getFullName()); // Ram Sharma
ram.setFirstName("Ramesh");
console.log(ram.getFirstName()); // Ramesh
console.log(ram.getLastName()); // Sharma
console.log(ram.getFullName()); // Ramesh Sharma
