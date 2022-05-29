// Escreva um programa capaz de receber uma requisição http, leia um arquivo e escreva seu valor em forma de string. 
// Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.

// receber requisicao http? (modulo hpttp)
// ler arquivo? (modulo fs)
// retornar string

//como receber requisicao http?

const http = require('http')
const fs = require('fs')
const readFile = require('./controllers/readFile')
const file = './docs/teste.txt'
const server = http.createServer((request, response) => {
    const {
        url,
        method
    } = request
    if (method !== 'GET') {
        response.writeHead(405)
        response.end(JSON.stringify({
            message: 'Method not allowed'
        }))
    }
    if (url === '/docs') {
        response.writeHead(200)
        response.end(fs.readFile(file, (err) => {
            if (err) {
                console.log(err)
            } else {
                readFile(file)
            }
        }))
    }
})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})