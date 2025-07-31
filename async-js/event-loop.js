console.log("event loop");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise resolved");
    resolve("p1");
  }, 2000);
});
promise
  .then((data) => {
    console.log(data);
    return "p2";
  })
  .then((data) => {
    console.log(data);
    return "p3";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is resolved or rejected");
  });

setTimeout(() => {
  console.log("set timeout");
}, 0);

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log("event loop 2");
