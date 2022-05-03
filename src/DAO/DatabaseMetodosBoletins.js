import Database from "../infra/Database.js";

class DatabaseMetodosBoletins{

    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON";
        Database.run(pragma, (error)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Chaves estrangeiras");
            }
        })
    }

    static createTable(){
        this.activePragma();
        const tabela_boletins = `
        CREATE TABLE IF NOT EXISTS boletins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            docente_cpf VARCHAR,
            aluno_cpf VARCHAR,
            turma_nome VARCHAR,
            disciplina VARCHAR,
            nota FLOAT,
        FOREIGN KEY (docente_cpf) REFERENCES docentes(cpf),
        FOREIGN KEY (aluno_cpf) REFERENCES alunos(cpf),
        FOREIGN KEY (turma_nome) REFERENCES turmas(nome)
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_boletins, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela boletins criada com sucesso")
                }
            })
        })
    }

    static popular(boletim){
        const query = `INSERT INTO boletins VALUES (?, ?, ?, ?, ?, ?)`;
        boletim["nota"] = parseFloat(boletim["nota"]).toFixed(1);    
        const body = Object.values(boletim);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(e)
                } else{
                    resolve ({message: "boletim criado com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM boletins";
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

    static listaPorId(id){
        const query = "SELECT * FROM boletins WHERE id = ?";
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

    static alteraPorId(id,boletim){
        const query = "UPDATE boletins SET (id, docente_cpf, aluno_cpf, turma_nome, disciplina, nota) = (?, ?, ?, ?, ?, ?) WHERE id=?";
        boletim["nota"] = parseFloat(boletim["nota"]).toFixed(1); 
        const body = Object.values(boletim);
        
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, id], (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "boletim alterado com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorId(id){
        const query = "DELETE FROM boletins WHERE id=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, id, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "boletim deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosBoletins;