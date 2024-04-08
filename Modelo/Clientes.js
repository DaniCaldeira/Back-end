// Cliente.js

import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente {
    #codigo;
    #nome;
    #senha;
    #cpf;
    #email;
    #telefone;
    #endereco

    constructor(codigo = 0, nome = "", cpf = "",email="",endereco="",telefone="") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#cpf = cpf;
        //this.#senha = senha;
        this.#email = email ;
        this.#endereco = endereco;
        this.#telefone = telefone; 

    }




    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }
//-----------------------------
get telefone() {
    return this.#telefone;
}

set telefone(novotelefone) {
    this.#telefone = novotelefone;
}



//==============================
    get endereco() {
        return this.#endereco;
    }

    set endereco(novoendereco) {
        this.#endereco = novoendereco;
    }
    //CLIENTE
    
    get cpf() {
        return this.#cpf;
    }

    set cpf(novocpf) {
        this.#cpf = novocpf;
    }
    //------------------------

    
    get email() {
        return this.#email;
    }
    set email(novoemail) {
        this.#email = novoemail;
    }
    
    //---------------------------
    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get senha() {
        return this.#senha;
    }

    set senha(novaSenha) {
        this.#senha = novaSenha;
    }

    async gravar() {
        const dao = new ClienteDAO();
        await dao.gravar(this);
    }
    async gravarCliente() {
        const dao = new ClienteDAO();
        console.log("DENTRO DA CLIENTES JS ;",dao)
        await dao.gravarCliente(this);
    }


    async atualizar() {
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }

    async excluir() {
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa) {
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }
    async consultar1() {
        const dao = new ClienteDAO();
        return await dao.consultar1();
    }

    toString() {
        return `Cliente código: ${this.#codigo} - Nome: ${this.#nome} - Cpf: ${this.cpf} -  endereco: ${this.#endereco}-  email: ${this.email} -  Telefone: ${this.#telefone}`;
    }

    toJSON() {
        return {
            "codigo": this.#codigo,
            "nome": this.#nome,
            "senha": this.#senha,
            "cpf": this.#cpf,
            "email": this.#email,
            "endereco": this.#endereco,
            "telefone": this.#telefone
        };
    }
}
