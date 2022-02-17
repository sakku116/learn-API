const fs = require('fs');

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const readableStream = fs.createReadStream('./note.txt', {
    highWaterMark: 15
});

function read() {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
        // jangan menggunakan console.log()
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }}

readableStream.on('readable', read)

const writableStream = fs.createWriteStream('note.txt')
writableStream.write('text pertama');
writableStream.write('text kedua');
writableStream.write('text ketiga');

