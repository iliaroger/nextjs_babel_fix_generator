const fs = require('fs');

const createBabelRcFile = () => {
  fs.writeFile(
    '.babelrc',
    `{
        "presets": ["next/babel"],
        "plugins": []
    }`,
    (err) => {
      if (err) throw err;
      console.log('generated new file');
    }
  );
};

const createEslintRcFile = () => {
  fs.stat('.eslintrc.json', (err) => {
    if (err == null) {
      console.log('file detected. deleting file...');
      fs.unlink('.eslintrc.json', () => {
        console.log('file deleted');
      });
      console.log('file deleted.');
      fs.writeFile(
        '.eslintrc.json',
        `{
"extends": ["next/babel"]
}`,
        (err) => {
          if (err) throw err;
          console.log('generated new .eslintrc.json file');
        }
      );
    } else {
      console.log('file does not exist');
      fs.writeFile(
        '.eslintrc.json',
        `{
"extends": ["next/babel"]
}`,
        (err) => {
          if (err) throw err;
          console.log('generated new .eslintrc.json file');
        }
      );
    }
  });
};

try {
  createBabelRcFile();
  createEslintRcFile();
} catch (err) {
  console.log(err);
}
