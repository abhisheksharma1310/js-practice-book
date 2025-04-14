const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const startEventHandler = (start, stop) => {
  console.log("Start event triggered!", start, stop);
};

// add event handler
eventEmitter.on("start", startEventHandler);

// emit the event
eventEmitter.emit("start", 0, 20);

// remove listeners for an event
setTimeout(() => {
  eventEmitter.removeAllListeners();
});

// Emit the event again
setTimeout(() => {
  eventEmitter.emit("start", 10, 40);
}, 4000);
