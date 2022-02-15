// require() dari module.exports merupakan built in node.js untuk memanggil module local maupun module core
const coffee = require('./coffee.js');
const name = require('./name.js')
const http = require('http')

// sedangkan import() merupakan built in js hanya untuk memanggil module ES (javascript)
const http2 = import('http')

console.log(coffee)
console.log(name)