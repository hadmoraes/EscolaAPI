import Cursos from "../controller/Cursos.js";
import Database from "../infra/Database.js";

class DatabaseMetodosCurso{

    static createTable(){
        const tabela_cursos = `
        CREATE TABLE IF NOT EXISTS cursos(
            nome VARCHAR PRIMARY KEY,
            carga_horaria INTEGER,
            preco FLOAT
        )
        `

        return new Promise((resolve, reject)=>{
            Database.run(tabela_cursos, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela cursos criada com sucesso")
                }
            })
        })
    }

    static popular(curso){
        const query = `INSERT INTO cursos VALUES (?, ?, ?)`;
        const body = Object.values(curso);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "Curso criado com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM cursos";
        return new Promise((resolve, reject) =>{
            Database.all(query, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })
        })
    }

// no nosso projeto sera por cpf e nao por id!!!
    static listaPorNome(nome){
        const query = "SELECT * FROM cursos WHERE nome = ?";
        return new Promise((resolve, reject) => {
            Database.get(query, nome, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })

        })

    }

    static alteraPorNome(nome,curso){
        const query = "UPDATE cursos SET (nome,carga_horaria, preco) = ( ?, ?, ?) WHERE nome=?";
        const body = Object.values(curso);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, nome], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "Curso alterado com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorNome(nome){
        const query = "DELETE FROM cursos WHERE nome=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, nome, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "Curso deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosCurso;

