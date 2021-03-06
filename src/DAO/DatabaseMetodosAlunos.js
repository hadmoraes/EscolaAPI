import Database from "../infra/Database.js";
import moment from "moment";

class DatabaseMetodosAlunos{

    static createTable(){
        const tabela_alunos = `
        CREATE TABLE IF NOT EXISTS alunos(
            cpf VARCHAR PRIMARY KEY,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            data_nascimento DATE
        )
        `

        return new Promise((resolve, reject)=>{
            Database.run(tabela_alunos, (error)=>{
                if (error){
                    reject(error.message)
                } else{
                    resolve("Tabela alunos criada com sucesso")
                }
            })
        })
    }

    static popular(aluno){
        const query = `INSERT INTO alunos VALUES (?, ?, ?, ?, ?)`;
        const dataNascimento = moment(aluno["data_nascimento"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        aluno["data_nascimento"] = dataNascimento;
        const body = Object.values(aluno);

        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (error) =>{
                if (error){
                    reject()
                } else{
                    resolve ({message: "aluno criado com sucesso"})
                }
            } )
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM alunos";
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


    static listaPorCpf(cpf){
        const query = "SELECT * FROM alunos WHERE cpf = ?";
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

    static alteraPorCpf(cpf,aluno){
        const query = "UPDATE alunos SET (cpf, nome, email, telefone, data_nascimento) = (?, ?, ?, ?, ?) WHERE cpf=?";
        const dataNascimento = moment(aluno["data_nascimento"], 'DD/MM/YYYY').format('YYYY-MM-DD');
        aluno["data_nascimento"] = dataNascimento;
        const body = Object.values(aluno);
        return new Promise ( (resolve, reject) =>{
            Database.run(query, [...body, cpf], (error, result)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "aluno alterado com sucesso"})
                }
            })
        }

        )
    }

    static deletaPorCpf(cpf){
        const query = "DELETE FROM alunos WHERE cpf=?";
        return new Promise((resolve, reject)=>{
            Database.run(query, cpf, (error)=>{
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "aluno deletado com sucesso"})
                }
            })
        }

        )
    }

}

export default DatabaseMetodosAlunos;