const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Create an event handler that trigger once
eventEmitter.once("once", (message) => {
  console.log("Once event triggered!", message);
});

// Emit the event
setInterval(() => {
  eventEmitter.emit("once", "This will only trigger once!");
}, 3000);
