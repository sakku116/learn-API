class Wolf{
    constructor(){
        this.strength = Math.floor(Math.random()*100);
        // .floor digunakan untuk membulatkan angka float
        // .random digunakan untuk generate angka
        // katanya dia juga mereturn float
    }
    howl(){
        console.log('owooooo!, wolf menang!')
    }
}

module.exports = Wolf
