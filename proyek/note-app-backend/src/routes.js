
const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require('./handler');

/*

TESTING DOCS

- menampilkan data
    untuk menampilkan semua data dari notes,
    lakukan GET pada '/notes'.

- membuat / menambah data
    lakukan POST pada '/notes'.
    dan kirim body yang berformat:
    {
        "title": "",
        "tags": [],
        "body": ""
    }
    membuat data akan generate otomatis id unik bagi setiap data.

- menampilkan data tertentu
    lakukan GET pada '/notes/{id}'.
    masukkan id dari data (note) yang akan ditampilkan pada path parameter.
    (dapatkan id untuk semua notes saat mendapatkan semua data).

- mengedit data (note)
    lakukan PUT pada '/notes/{id}'.
    dan juga kirimkan body request berformat:
    {
        "title": "",
        "tags": [],
        "body": ""
    }

- menghapus data (note)
    lakukan DELETE pada '/notes/{id}'.

data (notes) tidak disimpan secara lokal. tetapi data disimpan sementara
saat server dijalankan, ketika server berhenti maka semua data akan hilang.

*/

const routes = [
    // memungkinkan client dapat membuat note baru
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },

    // memungkinkan client dapat meanmpilkan semua notes
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    // memungkinkan client menampilkan note tertentu dengan id (membuka note)
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    // memungkinkan client mengubah data
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    // memungkinkan client menghapus note
    // front end tidak mempunyai fungsi untuk menghapus note.
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;