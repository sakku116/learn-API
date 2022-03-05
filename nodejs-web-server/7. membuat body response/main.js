const http = require('http');

const port = 5000;
const host = 'localhost';

function requestListener(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    /*
    memberikan response dengan json karena content typenya berupa json

    response.end(JSON.stringify({
        message: 'hai, ini adalah homepage!',
    }));
    */

    const { url, method } = request;

    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'ini adalah halaman homepage',
            }));
        }
        else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `halaman tidak dapat diakses dengan ${method} request`
            }));
        }
    }
    else if (url === "/about") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'ini adalah halaman about'
            }));
        }
        else if (method === "POST") {
            let body = [];

            response.on('data', (chunk) => {
                body.push(chunk);
            });

            response.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `hallo ${name}! ini adalah halaman about`
                }));
            });
        }
        else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
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
