import { promises as fs } from 'fs';
await fs.writeFile('io_file.txt', 'Hello TypeScript!');

const data=await fs.readFile('io_file.txt', 'utf8');
console.log(data);

await fs.appendFile('io_file.txt', '\nHello again! I am Ajitesh Madhu');

// await fs.unlink('io_file.txt');