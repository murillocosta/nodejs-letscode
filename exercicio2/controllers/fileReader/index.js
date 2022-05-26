const fs = require('fs')

module.exports = function fileReader(dirPath, files) {
    files.map(file => {
        let filePath = dirPath + file
        fs.readFile(filePath, 'utf8', (err, data) => err ? console.error(err) : console.log("reading file ", file, ": ", data))
    })
}