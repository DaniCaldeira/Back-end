import conectar from "./Conexao.js";
import Cliente from "../Modelo/Clientes.js";

export default class ClienteDAO{

//// GRAVAR USUARIO

/// FUNCIONANDOOOOOOOOOOOOOOOOOOOOOOO
async gravar(cliente) {
    if (cliente instanceof Cliente){
        const conexao = await conectar();

        console.log("DENTRO DA FUNÇÃO DE GRAVAR",cliente.nome,cliente.senha,cliente.codigo);
        const sql = `INSERT INTO usuario1 (nome, senha) 
                    values (? , ?)`;
        
        const parametros = [
            cliente.nome,
            cliente.senha,
        ];
        const [resultados, campos] = await conexao.execute(sql, parametros);
        cliente.codigo = resultados.insertId;
    }

}

/// GRAVAR VENDAAAAAAAAAAAAA
//FUNCIONANDOOOOOOOOOOOO
async gravarvenda(cliente){

    const conexao = await conectar();

    console.log("DENTRO DA FUNÇÃO DE GRAVAR VENDA",cliente.codigo, cliente.venqtd,cliente.venpreço);
    const sql = `INSERT INTO vendas (codigo,Venqtd,Venpreco) 
                values (?,?,?)`;
    
    const parametros = [
        cliente.codigo,
        cliente.venqtd,
        cliente.venpreço,
    ];
    const [resultados, campos] = await conexao.execute(sql, parametros);
    cliente.Vendid = resultados.insertId;
    console.log("VENDA GRAVADA COM SUCESSO");
}
    ///////-------------------------------------------------------------
   /// FUNÇÃO DE ATUALIZAR FUNCIONANDO 

    async atualizar(cliente) {
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = `UPDATE vendas
            set Venqtd= ?, Venpreco= ? WHERE Vendid = ?`;
            const parametros = [
               cliente.venqtd,
               cliente.venpreço,
               cliente.Vendid,
            ]

            await conexao.execute(sql, parametros);

        }
        
        console.log("ATUALIZADO COM SUCESSO");
    }
//
    async excluir(cliente) {
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = `DELETE FROM vendas WHERE Vendid = ?`;
            const parametros =[
                cliente.Vendid
            ]
            await conexao.execute(sql,parametros);
        }
        console.log("EXCLUIDO COM SUCESSO");
    }

    async consultarOLD(termoDePesquisa) {
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql = "";
        if (isNaN(parseInt(termoDePesquisa))){
            sql = `SELECT * FROM cliente WHERE nome LIKE ? `;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM cliente WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [termoDePesquisa]);

        let listaClientes = [];
        for (const registro of registros){
            const cliente = new Cliente(
                registro.id,
                registro.cpf,
                registro.nome,
            );
            listaClientes.push(cliente);
        }
        return listaClientes;
    }


    ////CONSULTA USUARIO

    async consultar(id) {
          const sql = `SELECT * FROM usuario1 WHERE codigo = ?`;


        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, [id]);

        let listaClientes = [];
        for (const registro of registros){
            const cliente = new Cliente(
               registro.id,
               registro.nome,
               registro.senha,
            );
            listaClientes.push(cliente);
        }
        return listaClientes;
    }

    async consultarvenda(id) {
        const sql = `SELECT * FROM vendas WHERE Vendid = ?`;


      const conexao = await conectar();
      const [registros] = await conexao.execute(sql, [id]);

      let listaClientes = [];
      for (const registro of registros){
          const cliente = new Cliente();
          registro.Vendid,
          registro.venqtd,
          registro.venpreço,
          registro.codigo
          cliente.Vendid
          cliente.venqtd
          cliente.venpreço
        
          listaClientes.push(cliente);
      }
      return listaClientes;

  }


}