const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('ini adalah text pertama');
writableStream.write('ini adalah text kedua');
writableStream.end('ini adalah text ketiga');