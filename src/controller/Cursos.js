import CursoModel from "../model/CursoModel.js";
import DatabaseMetodosCurso from "../DAO/DatabaseMetodosCurso.js";


class Cursos{

    static routers(app){

        app.get("/cursos", async (req, res)=>{
            try {
                const response = await DatabaseMetodosCurso.listarTodos();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.get("/cursos/:nome", async(req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosCurso.listaPorNome(nome);
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.post("/cursos", async (req,res)=>{
            try {
                if(true){
                    const curso = new CursoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosCurso.popular(nome);
                    res.status(201).json(response);
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.put("/cursos/:nome", async (req,res)=>{
            try {
                if(true){
                    const nome = req.params.nome;
                    const curso = new CursoModel(...Object.values(req.body));
                    const response = await DatabaseMetodosCurso.alteraPorNome(nome,curso);
                    res.status(200).json(response)                    
                }else{
                    throw new Error("A requisição está fora dos padrões, favor rever")
                }

            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

        app.delete("/cursos/:nome", async (req,res)=>{
            try {
                const nome = req.params.nome;
                const response = await DatabaseMetodosCurso.deletaPorNome(nome);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });

    }
}

export default Cursos; 