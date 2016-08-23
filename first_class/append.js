var fileHelper = require("./fileHelper");
var data = fileHelper.readFile("./data.txt", function(data, flag){
  fileHelper.writeData("./output.txt", data, {'flags': 'w'});
});
