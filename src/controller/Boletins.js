import BoletimModel from "../model/BoletimModel.js";
import DatabaseMetodosBoletins from "../DAO/DatabaseMetodosBoletins.js";
import Validacoes from "../services/Validacoes.js";

class Boletins{

    static routers(app){

        app.get("/boletins", async (req, res)=>{
            try {
                const response = await DatabaseMetodosBoletins.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/boletins/:id", async(req,res)=>{
            try {
                const id = req.params.id;
                const response = await DatabaseMetodosBoletins.listaPorId(id);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/boletins", async (req,res)=>{
            try {
                const valido = Validacoes.validaNome(req.body.disciplina) && 
                               Validacoes.validaNumero(req.body.nota);

                if(valido){
                    const boletim = new BoletimModel(...Object.values(req.body));
                    const response = await DatabaseMetodosBoletins.popular(boletim);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver a documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/boletins/:id", async (req,res)=>{
            try {
                const valido = Validacoes.validaNome(req.body.disciplina) && 
                               Validacoes.validaNumero(req.body.nota);
                               
                if(valido){
                    const id = req.params.id;
                    const boletim = new BoletimModel(...Object.values(req.body));
                    const response = await DatabaseMetodosBoletins.alteraPorId(id,boletim);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver a documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/boletins/:id", async (req,res)=>{
            try {
                const id = req.params.id;
                const response = await DatabaseMetodosBoletins.deletaPorId(id);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }

}

export default Boletins;