//node event emitter

const events = require('events');
const eventEmitter = new events.EventEmitter();

const one  = function one(){
    console.log("One");
}

const two  = function two(){
    console.log("Two");
}

eventEmitter.addListener('test', one);
eventEmitter.on('test', two);
eventEmitter.emit('test');

const getParty = ()=>{
    console.log("Time to party");
    const ran = Math.ceil(Math.random()*3);
    console.log(`Party starts in ${ran} seconds`);
    tester(ran);
};

eventEmitter.on('music', getParty);

tester(2);

function tester(val){
    setTimeout(e=>{
        eventEmitter.emit('music');
    },val*1000);
};

eventEmitter.on('event', (a,b)=>{
    console.log(a,b,this);
});

eventEmitter.emit('event','a','b');