const fs = require('fs')
const displayDir = require('./displayDir')

module.exports = dirReader = dirPath => fs.readdir(dirPath, 'utf8', (err, files) => err ? console.error(`Erro lendo dir: ${err}`) : displayDir(dirPath, files))