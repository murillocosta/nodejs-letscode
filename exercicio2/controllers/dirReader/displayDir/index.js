const fileReader = require('../../fileReader')

module.exports = displayDir = (dirPath, files) => {
    console.log(`Listando arquivos do diretório ${dirPath}: ${files.join(', ')}`)
    console.table(files)
    fileReader(dirPath, files)
}