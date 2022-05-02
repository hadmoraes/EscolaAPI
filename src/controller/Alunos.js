import Validacoes from "../services/Validacoes.js";
import AlunoModel from "../model/AlunoModel.js";
import DatabaseMetodosAlunos from "../DAO/DatabaseMetodosAlunos.js";


class Alunos{

    static routers(app){

        app.get("/alunos", async (req, res)=>{
            try {
                const response = await DatabaseMetodosAlunos.listarTodos(req);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/aluno/:cpf", async(req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodosAlunos.listaPorCpf(cpf);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/aluno", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email) && Validacoes.validaCPF(req.body.cpf) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaData(req.body.data_nascimento)){
                    const aluno = new AlunoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosAlunos.popular(aluno);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                /* res.status(400).json({erro: error.message}) */
            }
        });
    

        app.put("/alunos/:cpf", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email) && Validacoes.validaCPF(req.body.cpf) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaData(req.body.data_nascimento)){
                    const cpf = req.params.cpf;
                    const aluno = new AlunoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosAlunos.alteraPorCpf(cpf,aluno);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/alunos/:cpf", async (req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodosAlunos.deletarPorCpf(cpf);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Alunos;
