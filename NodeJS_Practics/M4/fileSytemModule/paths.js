const path = require('path');
const fileName = 'new0.html';
const dir = 'public';
const url = path.join('/','.',dir,fileName);
console.log(url);
console.log(path.dirname(url));
console.log(path.basename(url));
console.log(path.extname(url));
console.log(path.resolve(fileName));


