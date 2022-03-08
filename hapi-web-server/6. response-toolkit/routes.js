const routes = [
    /*
    handler pada Hapi punya 2 parameters, seperti yang biasa kita gunakan sebelumnya,
    dia berisi (request, h). sebenarnya 2 paramters tersebut sama seperti (request, response) 
    pada nodejs. h menunjukkan inisial Hapi, yang didalamnya mempunyai banyak method untuk keperluan
    response. kita bisa menentukan header dengan ini. seperti statusCode pada native, 
    */

    /* ================ HOME PAGE ================ */
    {
        path: "/",
        method: "POST",
        handler: (request, h) => {
            const response = h.response('success');
            response.code(200);
            response.type('text/plain');
            response.header('X-Custom', 'some-value');
            return response;
            /* 
            atau bisa menggunakan chained notation.
            ```
            const response = h.response('sucsess').code(200).type('text/plain'). ..dst
            ```
            atau
            ```
            const response = h.response('success')
                .code(200)
                .type('text/plain')
                ....dan seterusnya
            ```
            secara default dia hanya akan mereturn 'success', saya belum tahu bagaimana
            cara menampilkan data lainnya seperti statusCodenya.
            */ 
        }
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "halaman homepage hanya dapat diakses dengan method GET"
        },
    },
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage"
        }
    },

    /* ================ LOGIN PAGE ================ */
    {
        path: '/login',
        method: 'POST',
        handler: (request, h) => {
            const {username, password} = request.payload;
            return `Welcome ${username}`
        }
    },

    /* ================ ABOUT PAGE ================ */
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page"
        }
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "About page tidak dapat diakses dengan method selain GET"
        }
    },

    /* ================ USER PAGE ================ */
    {
        method: "GET",
        path: "/users/{name?}",
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang = 'en' } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}!`
            }
            else {
                return `Hello, ${name}!`
            }
        }
    },

    /* ================ UNDEFINED PAGE ================ */
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "halaman tidak ditemukan (tidak ditentukan routingnya)"
        },
    }
];

module.exports = routes;
