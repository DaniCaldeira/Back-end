import Cliente  from "./Modelo/Clientes.js";


const cliente = new Cliente(0, "333.333.333-33", 
 "Matheus Caldeira",
 "Rua das Laranjeiras, 201",
 "Vila Ocidental",
 "São Paulo",
 "SP",
 "(18)99999-9999",
 "aaaaaaa@gmail.com",
    );

/*cliente.gravar().then(() =>{
    console.log("Cliente gravado com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});*/

/*cliente.atualizar().then(() =>{
    console.log("Cliente atualizado com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});*/

/*cliente.excluir().then(() =>{
    console.log("Cliente excluido com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});*/

const clienteQQ = new Cliente();

let listaClientes = [];
clienteQQ.consultar("Moraes").then((lista) => {
    listaClientes = lista;
}).catch((erro) =>{
    console.log("Não foi possivel consultar o cliente.", erro);
});