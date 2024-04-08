// ClienteDAO.js

import conectar from "../Persistencia/Conexao.js";
import Cliente from "../Modelo/Clientes.js";
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
    async gravarCliente(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            //dentro da função
            console.log("DENTRO DA FUNÇÃO", cliente);
            const sql = `INSERT INTO cliente (nome, cpf, endereço, email, telefone) VALUES (?, ?, ?, ?, ?)`;
            // Correção do acesso aos parâmetros e do nome da coluna "endereco"
            const parametros = [cliente.nome, cliente.cpf, cliente.endereco, cliente.email, cliente.telefone];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            cliente.codigo = resultados.insertId;
        }
    }
    async atualizar(cliente) {
        if (cliente instanceof Cliente) {
            console.log("DENTRO DA FUNÇÃO ATUALIZAR DADOS ",cliente);
            const conexao = await conectar();
            const sql = `UPDATE cliente SET nome = ?, cpf = ?, endereço = ?, email= ?, telefone= ? WHERE id = ?`;
            const parametros = [cliente.nome, cliente.cpf,cliente.endereco,cliente.email,cliente.telefone, cliente.codigo];
            await conexao.execute(sql, parametros);
        }
    }

    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const conexao = await conectar();
            const sql = `DELETE FROM cliente WHERE id = ?`;
            const parametros = [cliente.codigo];
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
    async consultar1() {
        const sql = `SELECT * FROM cliente;`;
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql);
        let listaClientes = [];
        for (const registro of registros) {
            const { codigo, nome, cpf, email, endereco, telefone } = registro;
            // Verifica se os valores estão definidos, se não, passa null
            const cliente = new Cliente(
                codigo || null, 
                nome || null, 
                cpf || null, 
                email || null, 
                endereco || null, 
                telefone || null
            );
            console.log("DENTRO DA CONSULTAR1", cliente);
            listaClientes.push(cliente);
        }
        console.log("DENTRO DA CONSULTAR1", listaClientes);
        return listaClientes;
    }
    
    
    async consultar1() {
        const sql = `SELECT * FROM cliente;`;
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql);
        let listaClientes = [];
        for (const registro of registros) {
            const cliente = new Cliente(
                registro.id, 
                registro.nome, 
                registro.cpf, 
                registro.email,
                registro.endereço,
                registro.telefone
            );
            listaClientes.push(cliente);
        }
        return listaClientes;
    }
}
