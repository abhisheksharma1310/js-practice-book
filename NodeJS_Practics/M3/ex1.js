
const events = require('events');
const eventEmitter = new events.EventEmitter();

const sayHello = ()=>{
    console.log("Hello!");
};

eventEmitter.on('greet', sayHello);

eventEmitter.emit('greet');

console.log(1);

setImmediate(()=>{
    console.log(2);
});

setTimeout(()=>{
    console.log(3);
},0);

console.log(4);

setImmediate(()=>{
    console.log(5);
});

(()=>{
    console.log("IIFE");
})();

process.nextTick(()=>{
    console.log(6);
});

console.log(7);