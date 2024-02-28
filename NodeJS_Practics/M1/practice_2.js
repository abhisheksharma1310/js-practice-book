//node Js global and process variables

//print directory path
console.log(__dirname);

//print file path
console.log(__filename);

//print process id 
console.log(process.pid);

//print process argument
console.log(process.argv);

let secondArgv = process.argv[2];
let thirdArgv = process.argv[3];

//print received argument
console.log(`Hi ${secondArgv} ${thirdArgv}`);
