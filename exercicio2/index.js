// Escreva um programa que liste todos os arquivos de um diretório de forma dinâmica e também leia todos os arquivos e mostre na tela. Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.

// breaking up the problem:    
    // how to list files of a directory? (fs)
    
// breaking in sub problems:
    // what's necessary to list dir with Node.JS?  
        // fs.readdir
    // what's necessary to read files with Node.JS?
        // fs.readFile

const dirReader = require('./controllers/dirReader')
const dirPath = './docs/'

dirReader(dirPath)
