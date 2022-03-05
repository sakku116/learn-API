const http = require('http');

const port = 5000;
const host = 'localhost';

/*
coba untuk melakukan curl:
curl -X POST http://localhost:5000
ganti 'POST' dengan method lainnya jika diperlukan
*/

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // MEMBUAT REQUEST HANDLER
    // buat variable untuk memanggil method dari request
    const method = request.method;
    /*
    atau bisa menggunakan `const { method } = request;`
    untuk langsung mendapatkan si methodnya.
    request biasanya berisi method seperti GET POST PUT DELETE
    yang biasa digunakan pada command 'curl'.
    secara default, response handler akan meresponse sebagai GET.
    */

    if(method === "GET") {
        response.end('<h1>Welcome to my Web Server!</h1>')
    }
    else if(method === "PUT") {
        response.end('<h2>method yang dimasukkan: PUT</h2>')
    }
    else if(method === "POST") {
        response.end('<h2>method yang dimasukkan: POST</h2>')
    }
    else if(method === "DELETE") {
        response.end('<h2>method yang dimasukkan: DELETE</h2>')
    }
}

function listeningListener(port, host) {
    console.log(`server berjalan pada http://${host}:${port}`)
}

function start() {
    console.log('membuat web server')

    const server = http.createServer(requestListener);
    server.listen(port, host, listeningListener(port, host))
}

start()
