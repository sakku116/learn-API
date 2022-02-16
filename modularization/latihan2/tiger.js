class Tiger{
    constructor(){
        this.strength = Math.floor(Math.random()*100);
        // .floor digunakan untuk membulatkan angka float
        // .random digunakan untuk generate angka
        // katanya dia juga mereturn float
    }
    growl(){
        console.log('grrrrr!, tiger menang!')
    }
}

module.exports = Tiger