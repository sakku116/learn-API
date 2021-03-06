const routes = [
    /* ================ USER PAGE ================ */
    /* latihan path parameter */
    {
        method: "GET",
        path: "/users/{name?}",
        handler: (request, h) => {
            const { name } = request.params;
            return `Hello, ${name}`
            /*
            request.params akan mendapatkan string parameter pada path.
            '?' pada akhir nama parameter akan mengatasi error jika user tidak
            memasukkan parameter.
            */
        }
    },

    /* ================ HOME PAGE ================ */
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
