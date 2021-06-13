// The global object

// global object - contains values, objects and methods that available globally (no need to import (require))
let hello = "Hello World From NODE JS";
global.console.log(hello);

console.log(__dirname); // full path to the file
console.log(__filename); // full path to the file & filename


// The require function

// require function - also in global object
// path module ships with node.js, has tools to work with path strings
const path = require("path");
// basename (function in path module) will pluck filename from __filename
console.log(`The file name is ${path.basename(__filename)}`);


// The process object

// process object (in global object - available globally) - contains info about process and tools to interact with it
console.log(process.pid); // current process ID
console.log(process.versions.node); // version of node
console.log(process.argv); // variable (array) that contains everything we typed to run the process (e.g. node index.js)

const [, , firstName, lastName] = process.argv; // run node index Asya Chen
console.log(`My first name ${firstName}, my last name ${lastName}`);

// Pass arguments with flags to process.argv
// Run node index --user Asya --greeting 'Good day' (using quotes will treat Good day as one srting)
// grab function grabs values by flag (find index of flag and return the next value)
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);

// process.stdout and process.stdin - object that let us to communicate with the process while it's running

// process.stdout - writeable string
// write method (will be used here to print string to the terminal)
process.stdout.write('hello ');
process.stdout.write('world \n\n\n');