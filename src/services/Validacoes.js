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

}

export default Validacoes;