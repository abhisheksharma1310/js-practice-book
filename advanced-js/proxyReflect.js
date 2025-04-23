// Proxy and Reflect are two powerful features in JavaScript that allow you to intercept and redefine operations for objects.
// They are often used together to create more complex and flexible objects, such as proxies for data validation, logging, and access control.
// declaration of proxy and reflect

const target = { name: "Jhon" }; // target object to be proxied

const handler = {
  // handler object to define the proxy behavior
  get: function (target, prop, receiver) {
    // intercept the get operation
    console.log(`Getting ${prop}`); // log the property being accessed
    return Reflect.get(target, prop, receiver); // use Reflect to get the property value from the target object
  },
  set: function (target, prop, value, receiver) {
    // intercept the set operation
    console.log(`Setting ${prop} to ${value}`); // log the property being set and its value
    return Reflect.set(target, prop, value, receiver); // use Reflect to set the property value on the target object
  },
};

const proxy = new Proxy(target, handler); // create a proxy object with the target and handler
proxy.name = "Doe"; // set the name property on the proxy object, which will trigger the set operation in the handler
console.log(proxy.name); // get the name property from the proxy object, which will trigger the get operation in the handler
console.log(target.name); // get the name property from the target object directly
console.log(proxy); // log the proxy object to see its properties and methods
console.log(target); // log the target object to see its properties and methods
