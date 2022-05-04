import TurmaModel from "../model/TurmaModel.js";
import DatabaseMetodosTurmas from "../DAO/DatabaseMetodosTurmas.js";
import Validacoes from "../services/Validacoes.js";


class Turmas{

    static routers(app){

        app.get("/turmas", async (req, res)=>{
            try {
                const response = await DatabaseMetodosTurmas.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/turmas/:nome", async(req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosTurmas.listaPorNome(nome);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/turmas", async (req,res)=>{
            try {
                const valido = Validacoes.validaData(req.body.data_inicio) && 
                               Validacoes.validaData(req.body.data_final) && 
                               Validacoes.validaTurno(req.body.turno);
                               
                if(valido){
                    const turma = new TurmaModel(...Object.values(req.body));
                    const response = await DatabaseMetodosTurmas.popular(turma);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentacao")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/turmas/:nome", async (req,res)=>{
            try {
                const valido = Validacoes.validaData(req.body.data_inicio) && 
                               Validacoes.validaData(req.body.data_final) && 
                               Validacoes.validaTurno(req.body.turno);

                if(valido){
                    const nome = req.params.nome;
                    const turma = new TurmaModel(...Object.values(req.body));
                    const response = await DatabaseMetodosTurmas.alteraPorNome(nome,turma);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentacao")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/turmas/:nome", async (req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosTurmas.deletaPorNome(nome);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Turmas;