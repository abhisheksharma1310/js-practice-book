/**The Node.js fs core module provides many handy methods you can use to
work with folders. */

const fs = require("fs");
const path = require("path");

//check if folder exists
const folderPath = __dirname + "/newFolder";

try {
  const isExists = fs.existsSync(folderPath);
  //const access = fs.access(folderPath);
  //console.log("Access:", access);
  if (isExists) {
    console.log("Folder exists");
  } else {
    console.log("Folder does not exist");
  }
} catch (error) {
  console.error("Error checking folder:", error);
}

/**
 * Create a new folder
 * Use fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new
folder.
 */

const newFolderPath = __dirname + "/newFolder";

try {
  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
    console.log("New folder created:", newFolderPath);
  }
} catch (error) {
  console.error("Error creating folder:", error);
}

/**
*Read the content of a directory
*Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the
contents of a directory.
This piece of code reads the content of a folder, both files and subfolders, and
returns their relative path: */

try {
  fs.readdir(newFolderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }
    console.log("Folder contents:", files);
    if (files.length === 0) {
      console.log("Folder is empty");
    } else {
      console.log("Folder is not empty");
      files.forEach((file) => {
        console.log("File name:", file);
      });
    }
  });
} catch (error) {
  console.error("Error reading folder:", error);
}

/**
 * You can also filter the results to only return the files, and exclude the folders:
 */

const files = fs
  .readdirSync(newFolderPath)
  .map((file) => newFolderPath + "/" + file)
  .filter((file) => fs.lstatSync(file).isFile());
console.log("Files in folder:", files);

/**
 * Use fs.rename() or fs.renameSync() or fsPromises.rename() to rename
folder. The first parameter is the current path, the second the new path:
 */

const oldFolderPath = __dirname + "/newFolder";
const newFolderName = __dirname + "/renamedFolder";

async function renameFolder() {
  try {
    await fs.promises.rename(oldFolderPath, newFolderName);
    console.log("Folder renamed successfully");
  } catch (error) {
    console.error("Error renaming folder:", error);
  }
}
renameFolder();
