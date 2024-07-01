// Factory and Constructor Function

// Factory Function
function factoryAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// Constructor Function
function ConstructorAddress(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const faddress = factoryAddress("Nh 19", "Chapra", "841301");
console.log(faddress);

const cAddress = new ConstructorAddress("Nh 19", "Chapra", "841301");
console.log(cAddress);
