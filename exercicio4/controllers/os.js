const os = require('os')
const memCalc = require('./memCalc/index')

module.exports = function pcInfo() {
    console.log('CPUs:', os.cpus())
    console.log('Arquitetura: ', os.arch())
    memCalc()    
    console.log('Nome do Host:', os.hostname())
    console.log('Diretório raíz:', os.homedir())
    console.log('Informações do usuário:', os.userInfo())
}