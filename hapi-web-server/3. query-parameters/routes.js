const routes = [

    /* ================ HOME PAGE ================ */
    // latihan membuat query parameters
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name = "stranger", location="(unknown location)" } = request.query;
            // bisa menambahkan nilai default jika user tidak melakukan query parameter
            return `Hello, ${name} from ${location}`;
            
        },
        /*
        berbeda dengan path paramters yang sudah ditetapkan seperti {username?} sebelumnya, 
        query parameters memungkin kan user untuk memasukkan parameters dengan format key = value.
        coba untuk curl address dibawah ini:
        `localhost:5000?name=zakky&location=jawatengah`
        akses address tersebut menggunakan browser karena beberapa terminal mungkin menganggap
        karakter '&' sebagai syntax mereka dan akan mereturn error
        */
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "halaman homepage hanya dapat diakses dengan method GET"
        },
    },

    /* ================ USERS PAGE ================ */
    {
        method: "GET",
        path: "/users/{name?}",
        handler: (request, h) => {
            const { name } = request.params;
            return `Hello, ${name}`
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
