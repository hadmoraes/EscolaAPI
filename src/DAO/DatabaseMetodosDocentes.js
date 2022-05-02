import Database from "../infra/Database.js";

class DatabaseMetodos{

    static createTable(){
        const tabela_docentes = `
        CREATE TABLE IF NOT EXISTS docentes(
            cpf VARCHAR PRIMARY KEY,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            salario FLOAT,
            disciplinas VARCHAR

        )
        `

        return new Promise((resolve, reject)=>{
            Database.run(tabela_docentes, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela docentes criada com sucesso")
                }
            })
        })
    }

    static popular(docente){
        const query = `INSERT INTO docentes VALUES (?, ?, ?, ?, ?, ?)`; 
        const body = Object.values(docente);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "docente criado com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM docentes";
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
    static listaPorCpf(cpf){
        const query = "SELECT * FROM docentes WHERE cpf = ?";
        return new Promise((resolve, reject) => {
            Database.get(query, cpf, (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })

        })

    }

    static alteraPorCpf(cpf,docente){
        const query = "UPDATE docentes SET (cpf, nome, email, telefone, salario, disciplinas) = (?, ?, ?, ?, ?, ?) WHERE cpf=?";
        const body = Object.values(docente);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, cpf], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "docente alterado com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorCpf(cpf){
        const query = "DELETE FROM docentes WHERE cpf=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, cpf, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "docente deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodos;