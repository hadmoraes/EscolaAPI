import Database from "../infra/Database.js";

class DatabaseMetodosCursos{

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
                    resolve("tabela cursos criada com sucesso")
                }
            })
        })
    }

    static popular(curso){
        const query = `INSERT INTO cursos VALUES (?, ?, ?)`;
        curso["carga_horaria"] = Math.round(curso["carga_horaria"]);
        curso["preco"] = parseFloat(curso["preco"]).toFixed(2);
        const body = Object.values(curso);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "curso criado com sucesso"})
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
        curso["carga_horaria"] = Math.round(curso["carga_horaria"]);
        curso["preco"] = parseFloat(curso["preco"]).toFixed(2);
        const body = Object.values(curso);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, nome], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "curso alterado com sucesso"})
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
                    resolve({message: "curso deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosCursos;

