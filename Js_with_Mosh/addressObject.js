const address = {
  street: "NH 19",
  city: "Chapra",
  zipCode: "841301",
};

function showSddress(address) {
  for (key in address) {
    console.log(key, address[key]);
  }
}

showSddress(address);
