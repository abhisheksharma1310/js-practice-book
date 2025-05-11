/**
 * access length property on any object which give total number of keys.
 */

// const o = Object.prototype; Object.defineProperty(o, "length", { get() { return Object.keys(this).length; }, });

const obj = {
  name: "Abhishek Sharma",
  age: 1998,
};

function getLength(obj) {
  return Object.keys(obj).length;
}

class CustomObject {
  constructor(obj) {
    Object.assign(this, obj);
  }

  get length() {
    return Object.keys(this).length;
  }
}

const customObj = new CustomObject(obj);

console.log(customObj.length);

console.log(getLength(obj));
