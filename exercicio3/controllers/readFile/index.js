const fs = require('fs')

module.exports = function readFile(file) {
    fs.readFile(file, 'utf-8', (err, data)=> {
        if (err) {
            console.log('erro ao ler arquivo')
        } else {                
            console.log(data.toString(), '. typeof: ',typeof data)
        }
    })
}