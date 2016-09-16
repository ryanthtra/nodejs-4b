var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('$$ ');
rl.prompt();

var toDoList = [];

var commands = {
  ls: function() {
    console.log(toDoList);
  },
  add: function(item) {
    toDoList.push(item);
  },
  rm: function(item) {
    toDoList = toDoList.filter(function(curr) {
      return curr !== item;
    });
  }
};

rl.on('line', function(line) {
  // toDoList.push(line);
  // console.log(toDoList);
  var words = line.split(' ');
  var command = words.shift();
  var argsStr = words.join(' ');

  commands[command](argsStr);

  rl.prompt();
});