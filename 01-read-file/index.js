const fs = require('fs');
const path = require('path');
const stream = fs.ReadStream(path.resolve(__dirname, 'text.txt'));
stream.on('data', (data) => {
  console.log(data.toString());
});
stream.on('error', (err) => {
  console.log(err);
});
