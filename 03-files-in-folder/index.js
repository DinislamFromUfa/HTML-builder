const fs = require('fs');
const path = require('path');
const folderPath = 'secret-folder';

fs.readdir(path.resolve(__dirname, folderPath), (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach((file) => {
    fs.stat(path.join(__dirname, folderPath, file), (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stats.isFile() === true) {
        console.log(
          `${path.parse(file).name} - ${path
            .extname(file)
            .replace('.', '')} - ${Math.round(stats.size / 1024)}`,
        );
      }
    });
  });
});
