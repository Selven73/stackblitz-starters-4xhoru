const zlib = require('zlib');
const fs = require('fs');
const unzip = zlib.createUnzip();
const inp = fs.createReadStream('input1.txt.gz');
const out = fs.createWriteStream('input2.txt');
inp.pipe(unzip).pipe(out);