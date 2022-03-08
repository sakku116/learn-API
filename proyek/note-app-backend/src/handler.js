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


function getAllNotesHandler(request, h) {
    return {
        status: 'success',
        data: {
            notes,
        },
    }
};

function getNoteByIdHandler(request, h) {
    const { id } = request.params;

    // mendapatkan note dari array notes dengan id secara otomatis
    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }
    else {
        const response = h.response({
            status: 'failed',
            message: 'Note tidak ditemukan'
        });
        response.code(404);
        return response;
    }
};

function editNoteByIdHandler(request, h) {
    const { id } = request.params;

    // mendapatkan objek dari body request client
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    // temukan index array dari note berdasarkan id secara otomatis.
    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        // ubah value dari note yang dipilih dari index berdasarkan id
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
    }
    else {
        const response = h.response({
            status: 'failed',
            message: 'gagal memperbarui catatan, Id tidak ditemukan'
        });
        response.code(404);
        return response;
    };
}

function deleteNoteByIdHandler(request, h) {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        // menghapus note dari index berdasarkan id secara otomatis
        notes.splice(index, 1);
        
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil dihapus',
        });
        response.code(200);
        return response;
    }
    else {
        const response = h.response({
            status: 'failed',
            message: 'catatan gagal dihapus, id tidak ditemukan',
        });
        response.code(404);
        return response;
    }
}
 

module.exports = {
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};