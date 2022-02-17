// require() dari module.exports merupakan built in node.js untuk memanggil module local maupun module core
const http = require('http')
const coffee = require('./coffee.js');
const name = require('./name.js')
// name akan mengimport 2 variable, karena di name.js telah diexport 2 variable tersebut.
// meskipun yang di export pada name.js adalah 2 variable, kita tetap bisa mengimport salah satunya
// dengan const {nama-variable} = require{'./name.js'}
// (curly bracket required)

// sedangkan import() merupakan built in js hanya untuk memanggil module ES (javascript)
const http2 = import('http')

console.log(coffee)
console.log(name)