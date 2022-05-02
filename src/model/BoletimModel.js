class BoletimModel{
    constructor(id, docente_cpf, aluno_cpf, turma_nome, disciplina, nota){
        this.id = id;
        this.docente_cpf = docente_cpf;
        this.aluno_cpf = aluno_cpf;
        this.turma_nome = turma_nome;
        this.disciplina = disciplina;
        this.nota = nota;
    }
}

export default BoletimModel;