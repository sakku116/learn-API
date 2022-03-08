/*
front end menggunakan website yang telah disediakan oleh dicoding untuk latihan
http://notesapp-v1.dicodingacademy.com/
jadi untuk objek objek yang digunakan saat transaksi data harus sesuai dengan
instruksi dicoding, kecuali kita sendiri yang membuat bagian front end nya
*/ 

const routes = require('./routes')
const Hapi = require('@hapi/hapi');

console.log('membuat RESTful API');

async function init() {
    const server = Hapi.server(
        {
            port: 5000,
            host: 'localhost',
            routes: {
                cors: {
                    origin: ['*'],
                },
                /*
                Access-Control-Allow-Origin perlu dilakukan karena, pada dasarnya jika origin (server) client
                'http://notesapp-v1.dicodingacademy.com' berbeda dengan origin web server milik kita, 
                maka browser akan mendeteksi error CORS policy.
                ini artinya data yang kita olah dapat dikonsumsi oleh origin yang telah ditetapkan diatas.
                '*' berarti semua origin termasuk origin 'http://notesapp-v1.dicodingacademy.com' bisa
                mengkonsumsi data yang kita olah.

                untuk beberapa alasan, fitur flags/#block-insecure-private-network-requests pada browser,
                harus di matikan.
                */
            },
        },
    );

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();