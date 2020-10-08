const EventEmitter = require("events");

// Create class
class MyEmmiter extends EventEmitter {}

// Init object
const myEmmiter = new MyEmmiter();

// Event listener
myEmmiter.on("event", () => console.log("Event fired!"));

// Init event
myEmmiter.emit("event");
