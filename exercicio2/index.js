// Escreva um programa que liste todos os arquivos de um diretório de forma dinâmica e também leia todos os arquivos e mostre na tela. Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.

// breaking up the problem:    
// how to list files of a directory dinamically?
// how to read files?

// breaking in sub problems:
// what's necessary to list files of a directory dinamically? (File System, fs)
// fs.readFile
// fs.readdir

const fs = require('fs')

const dirPath = './docs/'

fs.readdir(dirPath, 'utf8', (err, files) => {
    if (err) {
        console.error(`Erro lendo dir: ${err}`)
    } else {
        console.log(`Listando arquivos do diretório ${dirPath}: ${files.join(', ')}`)
        console.table(files)
        files.map(file => {
            let filePath = dirPath + file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("reading file ", file, ": ", data);
                }
            })
        })
    }
})





