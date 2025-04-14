/**
 * A handy method to append content to the end of a file is fs.appendFile()
(and its fs.appendFileSync() counterpart):
 */

const fs = require("fs");
const fsp = require("fs/promises");

fs.appendFile("file.txt", "\nHello, world!", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
    return;
  }
  console.log("File appended successfully.");
});

try {
  fs.appendFileSync("file.txt", "\nHello, world!");
  console.log("File appended successfully.");
} catch (error) {
  console.error("Error appending to file:", error);
}

/**
 * Here is a fsPromises.appendFile() example:
 */

async function example() {
  try {
    await fsp.appendFile("file.txt", "\nHello, world!");
    console.log("File appended successfully.");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
}

example();
