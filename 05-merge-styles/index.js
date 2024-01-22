const fs = require('fs');
const path = require('path');
fs.writeFile(
  path.resolve(__dirname, 'project-dist', 'bundle.css'),
  '',
  (err) => {
    if (err) {
      console.log(err);
    }
  },
);
let FileWithContent = '';
fs.readdir(path.resolve(__dirname, 'styles'), (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach((file) => {
    if (file.split('.').at(-1) === 'css') {
      console.log(file);
      const content = fs.readFileSync(
        path.resolve(__dirname, 'styles', file),
        'utf-8',
      );
      FileWithContent += content;
    }
  });
  fs.writeFileSync(
    path.resolve(__dirname, 'project-dist', 'bundle.css'),
    FileWithContent,
  );
});
