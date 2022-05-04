import CursoModel from "../model/CursoModel.js";
import DatabaseMetodosCursos from "../DAO/DatabaseMetodosCursos.js";
import Validacoes from "../services/Validacoes.js";


class Cursos{

    static routers(app){

        app.get("/cursos", async (req, res)=>{
            try {
                const response = await DatabaseMetodosCursos.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/cursos/:nome", async(req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosCursos.listaPorNome(nome);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/cursos", async (req,res)=>{
            try {
                const valido = Validacoes.validaNome(req.body.nome) && 
                               Validacoes.validaNumero(req.body.carga_horaria) && 
                               Validacoes.validaNumero(req.body.preco);

                if(valido){
                    const curso = new CursoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosCursos.popular(curso);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/cursos/:nome", async (req,res)=>{
            try {
                const valido = Validacoes.validaNome(req.body.nome) && 
                               Validacoes.validaNumero(req.body.carga_horaria) && 
                               Validacoes.validaNumero(req.body.preco);
                               
                if(valido){
                    const nome = req.params.nome;
                    const curso = new CursoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosCursos.alteraPorNome(nome,curso);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor ver documentação")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/cursos/:nome", async (req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosCursos.deletaPorNome(nome);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Cursos; 