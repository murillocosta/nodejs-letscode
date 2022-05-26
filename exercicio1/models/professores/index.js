import Usuario from "../../usuarios/index.js";

class Professor extends Usuario {
    constructor(nome, sobrenome, diaNasc, mesNasc, anoNasc, departamento, diaAdmissao, mesAdmissao, anoAdmissao) {
        super(nome, sobrenome, diaNasc, mesNasc, anoNasc)
        this.departamento = departamento;
        this.diaAdmissao = diaAdmissao;
        this.mesAdmissao = mesAdmissao;
        this.anoAdmissao = anoAdmissao;
    }
    dataAdmissao = () => `${this.diaAdmissao}/${this.mesAdmissao}/${this.anoAdmissao}`
}

export default Professor
