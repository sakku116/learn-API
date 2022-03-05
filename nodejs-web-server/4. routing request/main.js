const http = require('http');

const port = 5000;
const host = 'localhost';

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { url, method } = request;
    /* url berisi relative path dari setelah hostname dan port.
    misal '/about', '/contact'.
    secara default url hanya berupa '/' */

    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>ini adalah homepage</h1>')
        } else {
            response.end(`<h1>Halaman ini tidak bisa diakses menggunakan ${method} request</h1>`)
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end('<h1>ini adalah halaman about</h1>')
        } else if (method === 'POST') {
            // body request
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk)
            });
            
            request.on('end', () => {
                body = Buffer.concat(body).toString();

                const { name } = JSON.parse(body);
                response.end(`<h1>Hai, ${name}! ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman ini tidak bisa diakses menggunakan ${method} request</h1>`)
        }
    } else {
        response.end('<h1>Halaman Tidak Ditemukan</h1>')
    }
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
