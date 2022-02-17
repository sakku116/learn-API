const fs = require('fs');
 
const readableStream = fs.createReadStream('./note.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
        // jangan menggunakan console.log()
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

// ini akan menjalankan readfile secara syncronus