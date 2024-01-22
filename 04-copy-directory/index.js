const fs = require('fs');
const path = require('path');
fs.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
fs.readdir(path.join(__dirname, 'files'), (err, files) => {
  if (err) {
    console.log(err);
  }
  for (const file of files) {
    const copy_file = file;
    fs.copyFile(
      path.resolve(__dirname, 'files', file),
      path.resolve(__dirname, 'files-copy', copy_file),
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  }
});
