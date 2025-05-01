/**
 * const add = (a,b) => a + b;
 * const memoizedAdd = memoizedOne(add);
 * memoizedAdd(1,2); // 3
 * Add function is called to get new value
 * memoized(1,2); // 3
 * Add function is not executed: previous result is returned
 * memoizedAdd(2,3); // 5
 * Add function is caled to get new value
 */

const map = new Map();

function memoizedOne(fn) {
  return function newFn(...arg) {
    const argStr = arg.join("");
    if (map.has(argStr)) {
      return map.get(argStr);
    } else {
      const result = fn(...arg);
      map.set(argStr, result);
      return result;
    }
  };
}

const add = (a, b) => {
  console.count("function called");
  return a + b;
};
const memoizedAdd = memoizedOne(add);
console.log(memoizedAdd(2, 3));
setInterval(() => {
  console.log(memoizedAdd(2, 3));
}, 3000);
