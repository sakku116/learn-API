const http = require('http');

const port = 5000;
const host = 'localhost';

// LATIHAN MEMBUAT BODY REQUEST
/*
coba untuk melakukan curl:
curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Saya\"}"
*/

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const method = request.method;

    if(method === "GET") {
        response.end('<h1>Welcome to my Web Server!</h1>')
    }
    else if(method === "POST") {
        // LATIHAN MEMBUAT BODY REQUEST PADA METHOD POST

        let body = [];

        function isiArray(chunk){
            /* 
            chunk berisi data yang dibawa callback dari fungsi event 'data'.
            ini akan menampung buffer 
            */
            body.push(chunk)
            console.log(`[chunk] : ${chunk}`);
            console.log(`[body] : ${body}`);
        }
        function convertBuffer(){
            // mengubah buffer menjadi string json utuh
            //body = Buffer.concat(body).toString();
            //console.log(`[body] : ${body}`);

            /* untuk menguraikan json.
            panggil key dengan brackets untuk mendapatkan valuenya */
            const { name } = JSON.parse(body);
            console.log(`[json 'name'] : ${name}`);

            // buat response
            response.end(`<h1>Hai, ${name}!</h1>`);
        }

        // buat event 'data' dan 'end'
        request.on('data', isiArray)
        request.on('end', convertBuffer)
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
