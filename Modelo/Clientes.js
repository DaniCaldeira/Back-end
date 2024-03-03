import ClienteDAO from "../Persistencia/ClienteDAO.js";
export default class Cliente {
    #codigo;
    #cpf;
    #nome;
    #endereço;
    #bairro;
    #cidade;
    #estado;
    #telefone;
    #email;

    constructor (codigo= 0, cpf= "", nome= "", endereço= "", bairro= "", cidade= "", estado= "", telefone= "", email= "" )
    {
        this.#codigo = codigo
        this.#cpf =  cpf
        this.#nome = nome
        this.#endereço = endereço
        this.#bairro = bairro
        this.#cidade = cidade
        this.#estado = estado
        this.#telefone = telefone
        this.#email = email

    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get endereço(){
        return this.#endereço;
    }

    set endereço(novoEndereço) {
        this.#endereço = novoEndereço;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade) {
        this.#cidade = novoCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado) {
        this.#estado = novoEstado;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    async gravar (){
        const dao = new ClienteDAO();
        await dao.gravar(this);
    }

    async atualizar (){
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }

    async excluir (){
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar (termoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return`Cliente codigo: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return{
            "codigo": this.#codigo,
            "cpf": this.#cpf,
            "nome": this.#nome,
            "endereço": this.endereço,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "estado": this.#estado,
            "telefone": this.#telefone,
            "email": this.#email

        }
    }





}