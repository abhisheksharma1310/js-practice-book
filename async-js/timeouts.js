// setTimeout
setTimeout(() => {
    console.log('set timeout');
}, 2000);

// clear setTimeout
const timerId = setTimeout(() => {
    console.log('set timeout cleared');
}, 2000);
clearTimeout(timerId);

// setInterval
// not run after fixed delay
setInterval(() => {
    console.log('run interval');
}, 1000);

// clearInterval
const intervalId = setInterval(() => {
    console.log('run interval cleared');
}, 1000);
clearInterval(intervalId);

// setInterval with setTimeout
// run after fixed delay
setTimeout(function run() {
    console.log('set timeout run');
    setTimeout(run, 1000);
}, 1000);