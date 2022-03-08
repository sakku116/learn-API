const routes = [
    /* ================ USER PAGE ================ */
    /* latihan menggabungkan path dan query parameter */
    {
        method: "GET",
        path: "/users/{name?}",
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang = 'unknown_lang'} = request.query;

            if (lang === 'id') {
                return `Hallo, ${name}`
            }
            else if (lang === 'en') {
                return `Hello, ${name}`
            }
            else {
                return `yo, ${name}`
            }
        }
        // coba untuk mengakses http://localhost:5000/users/zakky?lang=id
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
