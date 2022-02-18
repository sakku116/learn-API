console.log('membuat web server')

const http = require('http');

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    /* MEMBUAT RESPONSE DEFAULTt */
    //response.end('<h1>Welcome to my Web Server!</h1>');

    /* request berisi method seperti GET POST PUT DELETE
    yang biasa digunakan pada command 'curl' */

    /* MEMBUAT REQUEST HANDLER
    secara default ketika kita menggunakan
    response handler akan meresponse sebagai GET */
    const method = request.method;
    if(method === "GET") {
        response.end('<h2><h1>Welcome to my Web Server!</h1></h2>')
    } else if(method === "POST") {
        response.end('<h2>method yang dimasukkan: POST</h2>')
    } else if(method === "PUT") {
        response.end('<h2>method yang dimasukkan: PUT</h2>')
    } else if(method === "DELETE") {
        response.end('<h2>method yang dimasukkan: DELETE</h2>')
    }

}

// .createServer akan me-pass 2 argumen 'request' dan 'response'
const server = http.createServer(requestListener)

const port = 5000;
const host = 'localhost';

/* listen mempunyai 4 parameter yaiut:
- port
- hostname
- backlog
- listeningListener
tetapi secara default akan berisi port, host, listeningListener */

function myListener(port, host) {
    console.log(`server berjalan pada http://${host}:${port}`)
}

server.listen(port, host, myListener(port, host))
