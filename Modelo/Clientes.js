import ClienteDAO from "../Persistencia/ClienteDAO.js";
export default class Cliente {
    #codigo;
    #nome;
    #senha;
    #Vendid;
    #venqtd;
    #vendPreço;


        /// USUARIOOOOO
    constructor (codigo= 0, nome= "", senha= "")
    {
        this.#codigo = codigo
        this.#nome = nome
        this.#senha = senha
    }


//VENDA-------------------------------------------------
get Vendid(){
    return this.#Vendid;
}

set Vendid(novoid) {
    this.#Vendid = novoid;
}

get venqtd(){
    return this.#venqtd;
}

set venqtd(novoqtd) {
    this.#venqtd = novoqtd;
}
get venpreço(){
    return this.#vendPreço;
}

set venpreço(novopreço) {
    this.#vendPreço = novopreço;
}
//---------------------------------------------------------

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novonome) {
        this.#nome = novonome;
    }

    get senha(){
        return this.#senha;
    }

    set senha(novosenha) {
        this.#senha = novosenha;
    }

    async gravar (){
        const dao = new ClienteDAO();
        await dao.gravar(this);
    }
    async gravarvenda (){
        const dao = new ClienteDAO();
        await dao.gravarvenda(this);
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
    async consultarvenda (termoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return`Cliente codigo: ${this.#codigo} - senha: ${this.#senha}`;
    }

    toJSON(){
        return{
            "nome": this.#nome,
            "senha": this.#senha,

        }
    }





}