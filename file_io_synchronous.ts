import * as fs from 'fs';

// Writing to a file (Synchronous Example)
fs.writeFileSync('io_file.txt', 'Hello TypeScript!');

// Reading from a file (Synchronous Example)
const data = fs.readFileSync('io_file.txt', 'utf8');
console.log(data);

// Appending to a file (Synchronous Example)
fs.appendFileSync('io_file.txt', '\nHello again!');

//Deleting a file (Synchronous Example)
// fs.unlinkSync('io_file.txt');