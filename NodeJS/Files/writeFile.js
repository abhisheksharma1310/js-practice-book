/**The easiest way to write to files in Node.js is to use the fs.writeFile() API.
 */

const fs = require("fs");
const fps = require("fs/promises");

const content = "Hello, world!";

fs.writeFile("file.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});

/*
Alternatively, you can use the synchronous version fs.writeFileSync() :
*/

try {
  fs.writeFileSync("file.txt", content + "!", { flag: "a" });
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing file:", error);
}

/**You can also use the promise-based fsPromises.writeFile() method offered
by the fs/promises module */

async function example() {
  try {
    await fps.writeFile("file.txt", content);
    console.log("File written successfully.");
  } catch (error) {
    console.error(error);
  }
}
example();

/*
By default, this API will replace the contents of the file if it does already
exist.
You can modify the default by specifying a flag:
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, (err) => {})
The flags you'll likely use are
r+ open the file for reading and writing
w+ open the file for reading and writing, positioning the stream at the
beginning of the file. The file is created if it does not exist
a open the file for writing, positioning the stream at the end of the file.
The file is created if it does not exist
a+ open the file for reading and writing, positioning the stream at the
end of the file. The file is created if it does not exist
*/
