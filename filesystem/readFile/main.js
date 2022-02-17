const fs = require('fs');

function callback(error, data) {
    if(error) {
        console.log('Gagal membaca berkas')
        return;
    } else {
    console.log(data)
    }
}

fs.readFile('test.txt', 'UTF-8', callback)
/*
readFile bersifat Asyncronus, jadi ketika readFile digunakan berulang kali
atau digunakan pada file besar, dia akan memproses dahulu lalu menampilkan data.
sehingga dapat menyebabkan urutan data dari readFile yang berulang akan berantakan.
*/