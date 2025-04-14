/**
 * A file descriptor is a reference to an open file, a number (fd) returned by
opening the file using the open() method offered by the fs module. This
number ( fd ) uniquely identifies an open file in operating system:
 */

const fs = require("fs");
const fsp = require("fs/promises");
// Or const fs = require('fs').promises before v14.

fs.open("file.txt", "r", (err, fd) => {
  if (err) {
    console.error("Error opening file:", err);
    return;
  }
  console.log("File descriptor:", fd);

  // Remember to close the file descriptor when done
  fs.close(fd, (err) => {
    if (err) {
      console.error("Error closing file:", err);
    } else {
      console.log("File closed successfully.");
    }
  });
});

/**
 * r open the file for only read, if file doesn't exist it won't be
created.
 * r+ open the file for reading and writing, if file doesn't exist it won't be
created.
w+ open the file for reading and writing, positioning the stream at the
beginning of the file. The file is created if not existing.
a open the file for writing, positioning the stream at the end of the file.
The file is created if not existing.
a+ open the file for reading and writing, positioning the stream at the
end of the file. The file is created if not existing.
 */

/**
 * You can also open the file by using the fs.openSync method, which returns
the file descriptor, instead of providing it in a callback:
 */

try {
  const fd = fs.openSync("file.txt", "r");
  console.log("File descriptor:", fd);
} catch (error) {
  console.error("Error opening file:", error);
}

/**
 * You can also use the fs.promises API to open a file and get its file
 */
async function example() {
  let filehandle;
  try {
    filehandle = await fsp.open("file.txt", "r");
    console.log("File descriptor:", filehandle.fd);
    console.log(await filehandle.readFile({ encoding: "utf8" }));
  } finally {
    await filehandle.close();
  }
}
example();
