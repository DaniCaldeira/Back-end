// Cliente.js

import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente {
    #codigo;
    #nome;
    #senha;

    constructor(codigo = 0, nome = "", senha = "") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#senha = senha;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

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

    toString() {
        return `Cliente código: ${this.#codigo} - Nome: ${this.#nome}`;
    }

    toJSON() {
        return {
            "codigo": this.#codigo,
            "nome": this.#nome,
            "senha": this.#senha
        };
    }
}
