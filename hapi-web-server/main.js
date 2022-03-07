/*
membuat web server menggunakan Hapi
*/

console.log('membuat web server menggunakan Hapi');


const Hapi = require('@hapi/hapi');
const routes = require('./routes')

async function main() {
    
    /*
    Hapi.server() menampung parameter ServerOptions, yaitu menampung objek konfigurasi,
    seperti host, dan port.
    */

    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

    /*
    METHOD, Routing.
    berbeda dengan native, menghandle request method & routing sangat sederhana meggunakan Hapi.
    jika native membutuhkan pengkondisian, tetapi Hapi tidak.
    selamat tinggal if else. untuk meringkas kode, kumpulan route sebaiknya ditaruh pada file lain.
    
    (lihat pada file route.js)
    */ 

    server.route(routes)

}

main();