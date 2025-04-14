/**
 * The simplest way to read a file in Node.js is to use the fs.readFile()
method, passing it the file path, encoding and a callback function that will be
called with the file data (and the error):
 */

const fs = require("fs");
const fsp = require("fs/promises");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

/**
 * Alternatively, you can use the synchronous version fs.readFileSync() :
 */

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log("File content:", data);
} catch (error) {
  console.error("Error reading file:", error);
}

/**
 * You can also use the promise-based fs/promises API to read a file:
 */

async function example() {
  try {
    const data = await fsp.readFile("file.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
example();

/**
 * All three of fs.readFile() , fs.readFileSync() and fsPromises.readFile()
read the full content of the file in memory before returning the data.
This means that big files are going to have a major impact on your memory
consumption and speed of execution of the program.
In this case, a better option is to read the file content using streams.
 */
