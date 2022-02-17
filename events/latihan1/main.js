const EventEmitter = require('events');

const my_event = new EventEmitter();

function makeCoffee( {name} ) {
    // memberikan curly bracket sangat pengting untuk input parameter dict {key:value},
    // jika tidak, maka saat di print akan menunjukan 'object'
    console.log(`kopi ${name} telah dibuat`)
}
function makeBill( {price} ) {
    console.log(`bill sebesar ${price} telah dibuat`)
}

// mendaftarkan fungsi
my_event.on('coffee-order', makeCoffee)
my_event.on('coffee-order', makeBill)

// memicu event coffee-order terjadi
my_event.emit('coffee-order', {name: "tubruk", price:15000})
/*
dict pertama otomatis akan digunakan pada parameter func pertama,
dict kedua otomatis akan digunakan parameter pada func kedua,
karena pada event 'coffee-order' terdapat 2 fungsi yang didaftarkan
*/

// atau dengan membuat func handler sendiri
// ga tau kenapa undefined
function coffeeOrderedHandler( {name, price} ){
    makeCoffee(name);
    makeBill(price);
}
my_event.on('coffee-order2', coffeeOrderedHandler);
my_event.emit('coffee-order2', {name: "tubruk", price:15000})

