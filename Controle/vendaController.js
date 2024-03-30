import Vendas from "../Modelo/Vendas.js";

export default class VendaController {

    gravar(requisicao, resposta) {
        const dados = requisicao.body; // extrair dados do corpo da requisição
        const novaVenda = new Vendas(dados.clienteId, dados.produtoId, dados.quantidade, dados.precoTotal);

        novaVenda.gravar()
            .then(() => {
                resposta.status(201).json({
                    status: true,
                    mensagem: 'Venda gravada com sucesso!',
                    idVenda: novaVenda.id
                });
            })
            .catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: 'Erro ao gravar venda: ' + erro.message
                });
            });
    }

    atualizar(requisicao, resposta) {
        const dados = requisicao.body;
        const idVenda = requisicao.params.id;

        const vendaAtualizada = new Vendas(dados.clienteId, dados.produtoId, dados.quantidade, dados.precoTotal);
        vendaAtualizada.id = idVenda;

        vendaAtualizada.atualizar()
            .then(() => {
                resposta.status(200).json({
                    status: true,
                    mensagem: 'Venda atualizada com sucesso!'
                });
            })
            .catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: 'Erro ao atualizar venda: ' + erro.message
                });
            });
    }

    excluir(requisicao, resposta) {
        const idVenda = requisicao.params.id;

        Vendas.excluir(idVenda)
            .then(() => {
                resposta.status(200).json({
                    status: true,
                    mensagem: 'Venda excluída com sucesso!'
                });
            })
            .catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: 'Erro ao excluir venda: ' + erro.message
                });
            });
    }

    consultar(requisicao, resposta) {
        const idVenda = requisicao.params.id;

        Vendas.consultar(idVenda)
            .then((venda) => {
                resposta.status(200).json(venda);
            })
            .catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: 'Erro ao consultar venda: ' + erro.message
                });
            });
    }

}
