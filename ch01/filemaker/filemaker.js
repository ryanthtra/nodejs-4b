var fs = require("fs");

exports.createFiles = function(arg) {
  if (typeof arg == 'number') {
    for (let i = 0; i < arg; i++) {
      createFile(`${i}`, 'txt', null)
    }
  }
  else if (typeof arg == 'object') { // Array
    for (let i = 0; i < arg.length; i++) {
      createFile(`${i}`, 'txt', arg[i]);
    }
  }
};

function createFile(name, extension, content)
{
  if (content) {
    fs.writeFile(`./files/${name}.${extension}`, content, function(err) {
      if (err) throw err;
      console.log(`${name}.${extension} successfully created!`); 
    });
  }
  else {
    fs.writeFile(`./files/${name}.${extension}`, '', function(err) {
      if (err) throw err;
      console.log(`${name}.${extension} successfully created!`);
    });
  }
  
}