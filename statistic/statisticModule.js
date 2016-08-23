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
  extractFile: function(array, cb){
    var arrayList = [];
    var scoreList = [];
    array.forEach(function(v){
      arrayList.push(v.split(";"));
    });
    for(var i = 0; i < arrayList.length; i++){
      scoreList.push(parseFloat(arrayList[i][2]));
    };

    var indices = [];
    var element = Math.max(...scoreList);
    var idx = scoreList.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = scoreList.indexOf(element, idx + 1);
    }
    indices.forEach(function(v){
      cb(arrayList[v]);
    });
  },
  writeText: function(filePath, text, isAppended){
    fs.appendFile(filePath, text + '\n', isAppended, (err) => {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  },
}
