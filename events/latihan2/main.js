const EventEmitter = require('events');
const my_event = new EventEmitter();

function birthdayEvent(name){
    console.log(`Happy Birthday ${name}`)
}

my_event.on('birthday', birthdayEvent)
my_event.emit('birthday', 'zakky')