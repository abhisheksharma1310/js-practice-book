const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Create an event handler
const startEventHandler = (start, stop) => {
  console.log("Start event triggered!", start, stop);
};

// Add the event handler
eventEmitter.on("start", startEventHandler);

// Emit the event
setTimeout(() => {
  eventEmitter.emit("start", 0, 20);
}, 2000);

// Remove the event handler
setTimeout(() => {
  //eventEmitter.removeListener( "start", startEventHandler );
  eventEmitter.off("start", startEventHandler); // Alternative way to remove the listener
  console.log("Listener removed!");
}, 3000);

// Emit the event again
setInterval(() => {
  eventEmitter.emit("start", 10, 40);
}, 4000);
