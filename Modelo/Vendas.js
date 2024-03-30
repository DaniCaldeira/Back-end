// Venda.js

export default class Venda {
    #id;
    #clienteCodigo;
    #produtoCodigo;
    #quantidade;
    #precoTotal;

    constructor(clienteCodigo, produtoCodigo, quantidade, precoTotal) {
        this.#clienteCodigo = clienteCodigo;
        this.#produtoCodigo = produtoCodigo;
        this.#quantidade = quantidade;
        this.#precoTotal = precoTotal;
    }

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get clienteCodigo() {
        return this.#clienteCodigo;
    }

    set clienteCodigo(novoClienteCodigo) {
        this.#clienteCodigo = novoClienteCodigo;
    }

    get produtoCodigo() {
        return this.#produtoCodigo;
    }

    set produtoCodigo(novoProdutoCodigo) {
        this.#produtoCodigo = novoProdutoCodigo;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(novaQuantidade) {
        this.#quantidade = novaQuantidade;
    }

    get precoTotal() {
        return this.#precoTotal;
    }

    set precoTotal(novoPrecoTotal) {
        this.#precoTotal = novoPrecoTotal;
    }

    toJSON() {
        return {
            "id": this.#id,
            "clienteCodigo": this.#clienteCodigo,
            "produtoCodigo": this.#produtoCodigo,
            "quantidade": this.#quantidade,
            "precoTotal": this.#precoTotal
        };
    }
}
