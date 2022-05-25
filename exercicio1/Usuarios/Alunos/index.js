import Usuario from "../index.js";

class Aluno extends Usuario {
    constructor(nome, sobrenome, diaNasc, mesNasc, anoNasc, numeroMatricula, turma) {
        super(nome, sobrenome, diaNasc, mesNasc, anoNasc)
        this.numeroMatricula = numeroMatricula;
        this.turma = turma;
        this.nota1;
        this.nota2;
        this.aprovado;
    }
    mediaNotas = () => (this.nota1 + this.nota2) / 2
    situacao = () => this.mediaNotas() >= 7 ? this.aprovado = true : this.aprovado = false;
    mensagemAprovacao = () =>`${this.nome} obteve média ${this.mediaNotas()} e está ${this.aprovado ? 'aprovado' : 'reprovado'}.`
}

export default Aluno