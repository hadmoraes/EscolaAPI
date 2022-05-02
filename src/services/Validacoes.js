import moment from "moment";

class Validacoes{

    static validaNome(nome){
        return nome.length>=3
    };

    static validaTelefone(telefone){
        const numTel = parseInt(telefone);
        return (telefone.length == 11 && numTel == telefone)
    }

    static validaEmail(email){
        const validacaoEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(validacaoEmail) != null
    }

    static validaCPF(cpf){
        const validacaoCPF = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
        return (cpf.match(validacaoCPF) != null)
    }

    static validaData(data){
        return moment(data, 'DD/MM/YYYY',true).isValid()
    }

    static validaNumero(num){
        const numero = parseFloat(num)
        return numero == num
    }


    static validaTurno(turno){
        return (turno == "manhã" || turno == "manha" || turno == "tarde")
    }

}

export default Validacoes;