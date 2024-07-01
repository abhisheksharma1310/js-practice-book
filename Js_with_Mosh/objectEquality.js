function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

function areSame(address1, address2) {
  return address1 === address2;
}

function areEqual(address1, address2) {
  for (key in address1) {
    if (address1[key] !== address2[key]) {
      return "Not equal";
    }
  }
  return "Are Equal!";
}

console.log(areEqual(address1, address2));

console.log(areSame(address1, address2));
