//Objects in js

const yearOld = yob => new Date().getFullYear() - yob;
const p = 'pin';

const person = {
    fName: 'Abhishek',
    lName: 'Sharma',
    age: yearOld(1998),
    address: 'New Delhi',
    [p]: 113300,
    fullName: function(){return this.fName + ' ' + this.lName}
}

const knowPerson = (properties)=>{
    console.log(person[properties] ? person[properties] : 'Eneter valid properties');
}

//console.log(person);
const person2 = {...person};
person2.fName = 'Raj';
person2.age = yearOld(1995);
console.log("Person2: ",person2);
console.log("Person1: ",person);
const f = 'fName';
age = 'age';
console.log(person[f] + ' ' + person['lName'] + ' ' + person[`${age}`]);
knowPerson('age');
console.log(person.fullName());


