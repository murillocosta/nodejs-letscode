const os = require('os')

module.exports = function memCalc() {
    const totalMem = (os.totalmem() / 1024 ** 3).toFixed(3)
    const freeMem = (os.freemem() / 1024 ** 3).toFixed(3)

    console.log('Memória RAM total:', totalMem, 'Gb')
    console.log('Memória RAM disponível:', freeMem, 'Gb')
}
