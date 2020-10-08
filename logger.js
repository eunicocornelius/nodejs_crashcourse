const EventEmmiter = require("events");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

// Generate different ids
// console.log(uuid.v4());

class Logger extends EventEmmiter {
  log(msg) {
    const uid = uuid.v4();
    // Call event
    this.emit("message", { id: uid, msg });

    // Check if logs.txt contains content
    fs.readFile(
      path.join(__dirname, "logs", "logs.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        if (data.includes("id:")) {
          // appendFile: write to an existing file asynchronously
          fs.appendFile(
            path.join(__dirname, "logs", "logs.txt"),
            `id: ${uid}, ${msg} \n`,
            (err) => {
              if (err) throw err;
              console.log("File added to...");
            }
          );
        } else {
          // writeFile: Create and write to file
          fs.writeFile(
            path.join(__dirname, "logs", "logs.txt"),
            `id: ${uid}, ${msg} \n`,
            (err) => {
              if (err) throw err;
              console.log("File written to...");
            }
          );
        }
      }
    );
  }
}

module.exports = Logger;
