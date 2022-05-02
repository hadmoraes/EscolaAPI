import DocenteModel from "../model/DocenteModel.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import Validacoes from "../services/Validacoes.js";


class Docentes{

    static routers(app){

        app.get("/docentes", async (req, res)=>{
            try {
                const response = await DatabaseMetodos.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/docentes/:cpf", async(req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodos.listaPorCpf(cpf);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/docentes", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const docente = new DocenteModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.popular(docente);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/docentes/:cpf", async (req,res)=>{
            try {
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaEmail(req.body.email)){
                    const cpf = req.params.cpf;
                    const docente = new DocenteModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.alteraPorCpf(cpf,docente);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/docentes/:cpf", async (req,res)=>{
            try {
                const cpf = req.params.cpf;
                const response = await DatabaseMetodos.deletaPorCpf(cpf);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Docentes;

