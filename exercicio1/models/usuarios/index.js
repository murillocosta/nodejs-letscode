class Usuario {
    constructor(nome, sobrenome, diaNasc, mesNasc, anoNasc) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc
    }
    nomeCompleto = () => `${this.nome} ${this.sobrenome}`
    dataNasc = () => `${this.diaNasc}/${this.mesNasc}/${this.anoNasc}`
}

export default Usuario
