const http = require('http');

const port = 5000;
const host = 'localhost';

/*
menggunakan 'localhost' bisa saja diakses dari komputer,
karena localhost merujuk ke ipv4 address langsung. tetapi
di android localhost tidak merujuk ke ip address local. jadi,
jika ingin bisa mengakses dari android, lebih baik menggunakan
'[ipv4_address]' daripada 'localhost'.
*/

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    response.end('<h1>Welcome to my Web Server!</h1>');
}

function listeningListener(port, host) {
    console.log(`server berjalan pada http://${host}:${port}`)
}

function start() {
    console.log('membuat web server');

    /* .createServer() akan me-pass 2 argumen 'request' dan 'response' */
    const server = http.createServer(requestListener);

    /* .listen() mempunyai 4 parameter yaitu:
    - port
    - hostname
    - backlog
    - listeningListener (callback function)
    argumen port number wajib dimasukkan */
    server.listen(port, host, listeningListener(port, host))
}

start()
