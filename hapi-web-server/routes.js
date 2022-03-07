const routes = [

    // HOME PAGE
    {
        method: "*", 
        path: "/",
        handler: (request, h) => {
            return "halaman homepage hanya dapat diakses dengan method GET"
        },
        /*
            '*' pada objek method berarti semua method yang dapat diakses pada http,
            itu berarti semua method akan merouting ke route ini. TETAPI,
            kerena routing untuk method 'GET' path '/' sudah dibuat (dibawah), maka semua method selain 'GET'
            akan mereturn route ini.
        */ 
    },
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage"
        }
    },

    // ABOUT PAGE
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page"
        }
    },

    // USER PAGE
    /* latihan request parameter */
    {
        method: "GET",
        path: "/user/{name?}",
        handler: (request, h) => {
            const { name = "default" } = request.params;
            return `Hello, ${name}`
            /*
            request.params akan mendapatkan string parameter pada path.
            '?' pada nama objek parameter path akan mengambil default parameter
            yang telah ditentukan saat request hanya sampai '/user' tanpa menyertakan parameter.
            jika tidak menyertakan '?' maka akan objek "name" akan kosong
            */
        }
    },


    // UNDEFINED PAGE
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "halaman tidak ditemukan (tidak ditentukan routingnya)"
        },
    }
];

module.exports = routes;