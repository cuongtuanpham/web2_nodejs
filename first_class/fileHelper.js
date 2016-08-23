var readline = require("readline");
var fs = require('fs');

module.exports = {
  readFile: function(filePath, cb){
    var result = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath)
    });

    rl.on('line', (line) => {
      result.push(line);
    });

    rl.on('close', (line) => {
      cb(result);
    });
  },
  writeData: function(filePath, array, isAppended){
    array.forEach(function(v){
      console.log(v);
      fs.appendFile(filePath, v + '\n', isAppended, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    });
  },
}
