const http = require('http');

const port = 5000;
const host = 'localhost';

/*
cobalah untuk melakukan curl:
curl -X GET localhost:5000 -i
curl -X POST localhost:5000 -i
curl -X DELETE localhost:5000 -i
curl -X PUT localhost:5000 -i

curl -X GET localhost:5000/about -i
curl -X DELETE localhost:5000 -i
*/

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');

    // letakkan kode ini pada kondisi kondisi yang sudah dibuat dibawah,
    // dan ubah nomornya sesuai dengan aturan aturan standar statusCode
    // untuk mendapatkan default statusMessage dari nomor tersebut.
    // response.statusCode = 200;

    const { url, method } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman ini tidak bisa diakses menggunakan ${method} request</h1>`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>ini adalah halaman about</h1>');
        } else if (method === 'POST') {
            response.statusCode = 200;
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
            response.statusCode = 400;
            response.end(`<h1>Halaman ini tidak bisa diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.statusCode = 400;
        response.end('<h1>Halaman Tidak Ditemukan</h1>');
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
