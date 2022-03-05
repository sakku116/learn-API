const http = require('http');

const port = 5000;
const host = 'localhost';

function requestListener(request, response) {
    /*
    sebelumnya kita menggunakan:
    response.setHeader('Content-Type', 'text/html');
    untuk menentukan header. kode tersebut akan merender isi dari response.end
    sebagai html.
    kali ini kita akan mengubah setHeader dengan sesuatu yang lain.
    */
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;

    // ini tidak akan ter render sebagai html
    // melainkan akan dirender mentah mentah termasuk html tag nya.
    response.end('<h1>Welcome to my Web Server!</h1>');
}

function listeningListener(port, host) {
    console.log(`server berjalan pada http://${host}:${port}`)
}

function start() {
    console.log('membuat web server');

    const server = http.createServer(requestListener);
    server.listen(port, host, listeningListener(port, host))
}

start()
