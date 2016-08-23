var statisticModule = require("./statisticModule.js");
var text = statisticModule.readFile("./data.txt", function(data){
  console.log(data);
  var extractText = statisticModule.extractFile(data, function(arrayList){
    console.log(arrayList);
    var writeText = statisticModule.writeText("./output.txt", arrayList, {'flags': 'w'});
  });
});
