const zlib = require('zlib');
const fs = require('fs');
const gzip = zlib.createGzip();
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input1.txt.gz');
inp.pipe(gzip).pipe(out);