/**
 * Every file comes with a set of details that we can inspect using Node.js.
In particular, using the stat() method provided by the fs module.
You call it passing a file path, and once Node.js gets the file details it will call
the callback function you pass, with 2 parameters: an error message, and the
file stats:
 */

const fs = require("fs");
const fsp = require("fs/promises");

fs.stat("file.txt", (err, stats) => {
  if (err) {
    console.error("Error getting file stats:", err);
    return;
  }
  console.log("File stats:", stats);
  console.log("File size:", stats.size, "bytes");
  console.log("File created at:", stats.birthtime);
  console.log("File modified at:", stats.mtime);
  console.log("File accessed at:", stats.atime);
  console.log("Is file a directory?", stats.isDirectory());
  console.log("Is file a file?", stats.isFile());
  console.log("Is file a symbolic link?", stats.isSymbolicLink());
  console.log("Is file a character device?", stats.isCharacterDevice());
  console.log("Is file a block device?", stats.isBlockDevice());
  console.log("Is file a FIFO?", stats.isFIFO());
  console.log("Is file a socket?", stats.isSocket());
});

/**
 * Node.js also provides a sync method, which blocks the thread until the file
stats are ready:
 */

try {
  const stats = fs.statSync("file.txt");
  console.log("File stats:", stats);
} catch (error) {
  console.error("Error getting file stats:", error);
}

/**
 * You can also use promise-based fsPromises.stat() method offered by the
fs/promises module if you like:
 */

async function example() {
  try {
    const stats = await fsp.stat("file.txt");
    console.log("File stats:", stats);
  } catch (error) {
    console.error("Error getting file stats:", error);
  }
}

example();
