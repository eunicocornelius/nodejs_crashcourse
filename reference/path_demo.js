const path = require("path");

// Basename: Base file name
console.log(path.basename(__filename));

// Dirname: Directory name
console.log(path.dirname(__filename));

// Extname: File extension
console.log(path.extname(__filename));

// Parse: Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

// Join: Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));