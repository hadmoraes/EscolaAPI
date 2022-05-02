import Validacoes from "../services/Validacoes.js";
import AlunoModel from "../model/AlunoModel.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";


class Alunos{

    static routers(app){

        app.get("/alunos", async (req, res)=>{
            try {
                const response = await DatabaseMetodos.listarTodos(req);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/aluno/:cpf", async(req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodos.listaPorCpf(cpf);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/aluno", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const aluno = new AlunoModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.popular(aluno);
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
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const cpf = req.params.cpf;
                    const aluno = new AlunoModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.alteraPorCpf(cpf,aluno);
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
                const response = await DatabaseMetodos.deletarPorCpf(cpf);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Alunos;
