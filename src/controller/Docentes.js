import DocenteModel from "../model/DocenteModel.js";
import DatabaseMetodosDocentes from "../DAO/DatabaseMetodosDocentes.js";
import Validacoes from "../services/Validacoes.js";


class Docentes{

    static routers(app){

        app.get("/docentes", async (req, res)=>{
            try {
                const response = await DatabaseMetodosDocentes.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/docentes/:cpf", async(req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodosDocentes.listaPorCpf(cpf);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/docentes", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email) && Validacoes.validaCpf(req.body.cpf) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaNumero(req.body.salario) && Validacoes.validaNome(req.body.disciplinas)){
                    const docente = new DocenteModel(...Object.values(req.body));
                    const response = await DatabaseMetodosDocentes.popular(docente);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/docentes/:cpf", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)  && Validacoes.validaCpf(req.body.cpf) && Validacoes.validaTelefone(req.body.telefone) && Validacoes.validaNumero(req.body.salario) && Validacoes.validaNome(req.body.disciplinas)){
                    const cpf = req.params.cpf;
                    const docente = new DocenteModel(...Object.values(req.body));
                    const response = await DatabaseMetodosDocentes.alteraPorCpf(cpf,docente);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/docentes/:cpf", async (req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodosDocentes.deletaPorCpf(cpf);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Docentes;

