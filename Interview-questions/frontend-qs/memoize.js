//write a function memoize function results

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("cache found for argument: ", key);
      return cache.get(key);
    } else {
      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

function addSum(a, b) {
  return a + b;
}

const res = memoize(addSum);
console.log(res(2, 3));
console.log(res(2, 3));

const factorial = memoize((n) => {
  if (n < 2) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(6));
