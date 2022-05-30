const http = require('http')
const pcInfo = require('./controllers/os')
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
    if (url === '/pcinfo') {
        response.writeHead(200)
        pcInfo()
    }
})



server.listen(3000, () => {
    console.log("Server listening on port 3000")
})