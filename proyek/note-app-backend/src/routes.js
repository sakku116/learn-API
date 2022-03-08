
const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require('./handler');

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
    // ditemukan issue error pada front end untuk fungsi edit note.
    {
        method: 'POST',
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