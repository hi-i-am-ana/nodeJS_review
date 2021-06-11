// Global object - contains values, objects and methods that available globally (no need to import (require))
let hello = "Hello World From NODE JS";
global.console.log(hello);

console.log(__dirname); // full path to the file
console.log(__filename); // full path to the file & filename

// require function - also in global object
// path module ships with node.js, has tools to work with path strings
const path = require("path");
// basename (function in path module) will pluck filename from __filename
console.log(`The file name is ${path.basename(__filename)}`);

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

// process object (available globally) - contains info about process and tools to interact with it
console.log(process.pid) // current process ID
console.log(process.versions.node) // version of node
console.log(process.argv) // variable (array) that contains everything we typed to run the process

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);