import express from "express";
import rotaCliente from "./Rotas/rotaCliente.js";
import rotaVendas from "./Rotas/rotaVendas.js";

const host = '0.0.0.0'; 
const porta = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', rotaCliente);
app.use('/vendas', rotaVendas); 

app.listen(porta, host, ()=> {
    console.log(`Servirdor rodando em http://${host}:${porta}`);
})


// INICIANDO OBJETO COM O USUARIO E SENHA 

/*const cliente = new Cliente( 0,'DANI','123456'
    );
//---------------------------------------------------------------------------------CHAMANDO A FUNÇÃO DE GRAVAR PASSANDO O PRORPRIO OBJETO 
//cliente.gravar(this);
const clienteQQ = new Cliente();
//-------------------------------------------------------------------------------------FUNÇÃO PARA GRAVAR VENDA A BAIXO FUNCIONANDO--------------------

cliente.codigo=4
cliente.venpreço=100;
cliente.venqtd=2;
cliente.gravarvenda(this)


/*------------------------------------------------------------------------------------FUNÇÃO PARA ATUALIZAR--------------------------------------
*/

/*cliente.Vendid=2;
cliente.venpreço=30;
cliente.venqtd=10;
cliente.atualizar(this)*/


//----------------------------------------------------------------------------------------- EXCLUIR---------------------------------------------
/*cliente.Vendid=3
cliente.excluir(this);*/




//CONSULTANDO USUARIO PELO ID 
/*clienteQQ.consultar(4).then((listaClientes) => {
    console.log("Clientes encontrados:")
    for (const cliente of listaClientes){
        console.log(cliente.toJSON());
    }
}).catch((erro) =>{
    console.log("Não foi possivel consultar o cliente.", erro);
});

// CONSULTAR VENDAA PELO ID DA VENDA

clienteQQ.consultarvenda(2).then((listaClientes) => {
    console.log("Vendas encontradas:")
    for (const cliente of listaClientes){
        console.log(cliente.toJSON());
    }
}).catch((erro) =>{
    console.log("Não foi possivel consultar o cliente.", erro);
});*/
