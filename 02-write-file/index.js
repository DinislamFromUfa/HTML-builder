const fs = require('fs');
const path = require('path');
const readline = require('readline');
fs.WriteStream(path.resolve(__dirname, 'text.txt'));
const rl = readline.createInterface(process.stdin, process.stdout);
const WriteOnFile = fs.createWriteStream(path.resolve(__dirname, 'text.txt'), {
  flags: 'a',
});
console.log('Hello, friend');
process.stdin.on('data', (data) => {
  WriteOnFile.write(data);
});
rl.on('close', () => {
  console.log('By, By!');
});
