// ClienteDAO.js

import conectar from "./Conexao.js";
import Cliente from "../Modelo/Cliente.js";
import Venda from "../Modelo/Vendas.js";

export default class ClienteDAO {

    async gravar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `INSERT INTO usuario1 (nome, senha) VALUES (?, ?)`;
            const parametros = [cliente.nome, cliente.senha];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            cliente.codigo = resultados.insertId;
        }
    }

    async gravarVenda(venda) {
        if (venda instanceof Venda) {
            const conexao = await conectar();
            const sql = `INSERT INTO vendas (codigo, Venqtd, Venpreco) VALUES (?, ?, ?)`;
            const parametros = [venda.clienteCodigo, venda.quantidade, venda.precoTotal];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            venda.id = resultados.insertId;
        }
    }

    async atualizar(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `UPDATE usuario1 SET nome = ?, senha = ? WHERE codigo = ?`;
            const parametros = [cliente.nome, cliente.senha, cliente.codigo];
            await conexao.execute(sql, parametros);
        }
    }

    async atualizarVenda(venda) {
        if (venda instanceof Venda) {
            const conexao = await conectar();
            const sql = `UPDATE vendas SET Venqtd = ?, Venpreco = ? WHERE Vendid = ?`;
            const parametros = [venda.quantidade, venda.precoTotal, venda.id];
            await conexao.execute(sql, parametros);
        }
    }

    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `DELETE FROM usuario1 WHERE codigo = ?`;
            const parametros = [cliente.codigo];
            await conexao.execute(sql, parametros);
        }
    }

    async excluirVenda(venda) {
        if (venda instanceof Venda) {
            const conexao = await conectar();
            const sql = `DELETE FROM vendas WHERE Vendid = ?`;
            const parametros = [venda.id];
            await conexao.execute(sql, parametros);
        }
    }

    async consultar(id) {
        const sql = `SELECT * FROM usuario1 WHERE codigo = ?`;
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [id]);
        let listaClientes = [];
        for (const registro of registros) {
            const cliente = new Cliente(registro.codigo, registro.nome, registro.senha);
            listaClientes.push(cliente);
        }
        return listaClientes;
    }

    async consultarVenda(id) {
        const sql = `SELECT * FROM vendas WHERE Vendid = ?`;
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [id]);
        let listaVendas = [];
        for (const registro of registros) {
            const venda = new Venda(registro.clienteCodigo, registro.produtoCodigo, registro.quantidade, registro.precoTotal);
            venda.id = registro.Vendid;
            listaVendas.push(venda);
        }
        return listaVendas;
    }
}
