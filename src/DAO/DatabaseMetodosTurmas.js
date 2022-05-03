import Database from "../infra/Database.js";
import moment from "moment";

class DatabaseMetodosTurmas{

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
        const tabela_turmas = `
        CREATE TABLE IF NOT EXISTS turmas (
            nome VARCHAR PRIMARY KEY,
            curso_nome VARCHAR,
            data_inicio DATE,
            data_final DATE,
            turno VARCHAR,
        FOREIGN KEY (curso_nome) REFERENCES cursos(nome)
          )
          `
          
        return new Promise((resolve, reject)=>{
            Database.run(tabela_turmas, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela turmas criada com sucesso")
                }
            })
        })
    }


    static popular(turma){
        const query = `INSERT INTO turmas VALUES (?, ?, ?, ?, ?)`;
        const dataInicio = moment(turma["data_inicio"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        const dataFinal = moment(turma["data_final"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        turma["data_inicio"] = dataInicio;
        turma["data_final"] = dataFinal;
        const body = Object.values(turma);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject(error)
                } else{
                    resolve ({message: "turma criada com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM turmas";
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
        const query = "SELECT * FROM turmas WHERE nome = ?";
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

    static alteraPorNome(nome,turma){
        const query = "UPDATE turmas SET (nome, curso_nome, data_inicio, data_final, turno) = (?, ?, ?, ?, ?) WHERE nome=?";
        const dataInicio = moment(turma["data_inicio"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        const dataFinal = moment(turma["data_final"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        turma["data_inicio"] = dataInicio;
        turma["data_final"] = dataFinal;        
        const body = Object.values(turma);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, nome], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "turma alterada com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorNome(nome){
        const query = "DELETE FROM turmas WHERE nome=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, nome, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "turma deletada com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosTurmas;