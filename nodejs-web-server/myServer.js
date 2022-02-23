console.log('membuat web server')
const http = require('http');

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    /* MEMBUAT RESPONSE DEFAULT */
    //response.end('<h1>Welcome to my Web Server!</h1>');

    /* MEMBUAT REQUEST HANDLER
    request biasanya berisi method seperti GET POST PUT DELETE
    yang biasa digunakan pada command 'curl'.
    secara default, response handler akan meresponse sebagai GET */

    /* buat variable untuk memanggil method dari request */
    const method = request.method;
    /* atau bisa menggunakan
    const { method } = request;
    untuk langsung mendapatkan si methodnya */

    if(method === "GET") {
        response.end('<h1>Welcome to my Web Server!</h1>')
    }
    else if(method === "PUT") {
        response.end('<h2>method yang dimasukkan: PUT</h2>')
    }
    else if(method === "POST") {
        // latihan mendapatkan body request

        let body = [];

        function isiArray(chunk){
            /* chunk akan berisi data yang dibawa callback dari fungsi event 'data'
            ini akan menampung buffer */
            body.push(chunk)
            }
        function convertBuffer(){
            // mengubah buffer menjadi string json utuh
            body = Buffer.concat(body).toString();

            /* untuk menguraikan json.
            panggil key dengan brackets untuk mendapatkan valuenya */
            const { name } = JSON.parse(body);

            // dan akhirnya buat response.end()
            response.end(`<h1>Hai, ${name}!</h1>`);
            }

        // buat event 'data' dan 'end'
        request.on('data', isiArray)
        request.on('end', convertBuffer)

        /*
        coba untuk melakukan curl:
        curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Saya\"}"
        */
    }
    else if(method === "DELETE") {
        response.end('<h2>method yang dimasukkan: DELETE</h2>')
    }
}

function listeningListener(port, host) {
    console.log(`server berjalan pada http://${host}:${port}`)
    }

const port = 5000;
const host = 'localhost';

/* .createServer() akan me-pass 2 argumen 'request' dan 'response' */
const server = http.createServer(requestListener)

/* .listen() mempunyai 4 parameter yaitu:
- port
- hostname
- backlog
- listeningListener
tetapi secara default akan berisi port, host, listeningListener */
server.listen(port, host, listeningListener(port, host))
