import Database from "../infra/Database.js";

class DatabaseMetodos{

    static createTable(){
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            data_nascimento DATE
        )
        `

        return new Promise((resolve, reject)=>{
            Database.run(tabela_usuarios, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    static popular(usuario){
        const query = `INSERT INTO usuarios VALUES (?, ?, ?, ?, ?)`;
        const body = Object.values(usuario);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject()
                } else{
                    resolve ({message: "usuario criado com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM usuarios";
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
    static listaPorId(id){
        const query = "SELECT * FROM usuarios WHERE id = ?";
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })

        })

    }

    static alteraPorId(id,usuario){
        const query = "UPDATE usuarios SET (id, nome, email, telefone, data_nascimento) = (?, ?, ?, ?, ?) WHERE id=?";
        const body = Object.values(usuario);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, id], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "usuario alterado com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorId(id){
        const query = "DELETE FROM usuarios WHERE id=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, id, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "usuario deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodos;