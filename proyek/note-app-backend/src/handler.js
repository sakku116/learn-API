const { nanoid } = require('nanoid');
const notes = require('./notes');

function addNoteHandler(request, h) {
    // mendapatkan body request dari client
    const { title, tags, body } = request.payload;

    // generate id unik
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // tambahkan new note ke module notes.js
    notes.push({title, tags, body, id, createdAt, updatedAt});

    // memeriksa apakah newNote sudah ter push
    const isSuccess = notes.filter((note) => note.id === id).length > 0; // mereturn boolean

    // response
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil ditambahkan',
            data: {
                noteId: id,
            }
        });
        response.code(201);
        return response;
    }
    else {
        const response = h.response({
            status: 'failed',
            message: 'catatan gagal ditambahkan'
        });
        response.code(500);
        return response;
    };
};


function getAllNotesHandler() {
    return {
        status: 'success',
        data: {
            notes,
        },
    }
};
 

module.exports = {addNoteHandler, getAllNotesHandler};