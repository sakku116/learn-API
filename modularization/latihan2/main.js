
// panggil/import local module
const Tiger = require('./tiger.js')
const Wolf = require('./wolf.js')

// define func
function fighting(tiger, wolf) {
    if (tiger.strength > wolf.strength){
        tiger.growl()
    } else if (tiger.strength < wolf.strength){
        wolf.howl()
    } else {
        console.log('tiger dan wolf mempunyai kekuatan sama')        
    }
}

// buat class instance
const tiger = new Tiger();
const wolf = new Wolf();

// call func
fighting(tiger, wolf);