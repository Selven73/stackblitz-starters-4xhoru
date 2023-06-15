var fs = require('fs');
var data = 'A Solution of all Technology';  
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',function(){
  console.log("write ended");
});
writeStream.on('error',function(err){
  console.log(err.stack);
});
console.log("program ended");