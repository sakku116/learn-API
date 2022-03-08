const routes = [
    /* ================ LOGIN PAGE ================ */
    // latihan body request menggunakan Hapi (payload)
    {
        path: '/login',
        method: 'POST',
        handler: (request, h) => {
            const {username, password} = request.payload;
            return `Welcome ${username}`
        }
        /*
        payload memungkin kan user untuk mengirimkan body request seperti 
        { "username": "harrypotter", "password": "encryptedpassword" }.
        dalam nodejs kita membutuhkan harus berurusan dengan JSON.parse().
        tetapi dengan Hapi kita bisa melakukannya dengan sederhana, cukup
        membuat variable yang menampung objek dari .payload yang akan dikirimkan user sebagai
        body request.
        */
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
