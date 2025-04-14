const path = require("path");

console.log(path.join(__dirname, "file.txt")); // /home/user/NodeJS/Files/file.txt
console.log(path.resolve(__dirname, "file.txt")); // /home/user/NodeJS/Files/file.txt
console.log(path.resolve("file.txt")); // /home/user/NodeJS/Files/file.txt
console.log(path.resolve("file.txt", "file2.txt")); // /home/user/NodeJS/Files/file.txt/file2.txt
console.log(path.resolve("file.txt", "../file2.txt")); // /home/user/NodeJS/Files/file2.txt

const file = "/file.txt";
console.log(path.basename(file)); // file.txt
console.log(path.basename(file, ".txt")); // file
console.log(path.dirname(file)); // /
console.log(path.extname(file)); // .txt
console.log(path.isAbsolute(file)); // false

const name = "joe";
console.log(path.join("/", "users", name, "notes.txt")); // /users/joe/notes.txt

console.log(path.resolve("/file.txt")); // /file.txt

console.log(path.normalize("/users/joe/..//test.txt")); // /file.txt
