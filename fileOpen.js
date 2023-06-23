var fs = require('fs');
fs.open('input.txt',function(err,fd){
  if(err){
    return console.error(err);
  }
  console.log('file opened');
})