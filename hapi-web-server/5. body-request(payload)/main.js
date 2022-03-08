console.log('membuat web server menggunakan Hapi');
console.log('latihan body request atau payload dalam Hapi, (lihat di route.js)')

const Hapi = require('@hapi/hapi');
const routes = require('./routes')

async function main() {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

    server.route(routes);
}

main();
