import Cliente from "../Modelo/Clientes.js";

export default class ClienteController{

    //Esta classe irá traduzir pedidos HTTP em 
    //comandos internos da aplicação
    //A nossa aplicação sabe gravar , atualizar, excluir e consultar clientes
    // no banco de dados

    //Será necessario manipular requisições HTTP (GET, POST, PUT OU PATCH, DELETE)

    //CAMADA DE CONTROLE SERÁ ASSINCRONA 

    gravar(requisicao, resposta){

        //preparar o metodo gravar para produzir respostas no formato JSON
        resposta.type('application/json');

        //HTTP gravar um cliente é enviar uma requisição do tipo POST
        //trazendo dados no formato JSON
       if(requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body; //extrair dados do corpo da requisição
            const nome = dados.nome;
            const senha = dados.senha;
            
            //pseudo validação nos dados   
            if (nome && senha){
                const cliente = new Cliente(0, nome, senha)
                cliente.gravar().then(()=>{
                    resposta.status(201);
                    resposta.json({
                        'status':true,
                        'mensagem': 'Cliente gravado  com sucesso!',
                        'codigo_cliente': cliente.codigo
                    })
                }).catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        'status':false,
                        'mensagem':'não foi possivel armazenar o cliente!' + erro.message
                    })
                });
            }
            else{
                resposta.status(400)
                resposta.json({
                    'status':false,
                    'mensagem': 'Por favor, informe usuário e senha de acesso!'
                })
            }

        }
       else{
           resposta.status(400);
           resposta.json({
                'status': 'Requisição inválida dentro da gravar!'
           })

       }



    }

    //------------------------------------------ GRAVAR CLIENTE -------------------------------------------------------------

    gravarCliente(requisicao, resposta) {
        // Preparar a resposta para produzir respostas no formato JSON
        resposta.type('application/json');
    
        // Verificar se a requisição é um POST e está no formato JSON
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body; // Extrair dados do corpo da requisição
            console.log("DADOS Fora da funcao:",dados);
           // const { nome, cpf, email, telefone, endereco } = dados; // Desestruturar os dados
    
            // Validação dos dados
            if (dados) {
                // Criar uma instância da classe Cliente
                const cliente = new Cliente(0, dados.nome, dados.cpf, dados.email, dados.telefone, dados.endereco);
                
                // Gravar o cliente no banco de dados
                cliente.gravarCliente() //CLIENTE NÃO  ESTA SENDO GRAVADO
                    .then(() => {
                        resposta.status(201).json({
                            'status': true,
                            'mensagem': 'Cliente gravado com sucesso!',
                            'codigo_cliente': cliente.codigo
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            'status': false,
                            'mensagem': 'Não foi possível armazenar o cliente: ' + erro.message
                        });
                    });
            } else {
                // Caso algum dado esteja faltando
                resposta.status(400).json({
                    'status': false,
                    'mensagem': 'Por favor, informe todos os dados do cliente!'
                });
            }
        } else {
            // Caso a requisição não seja um POST ou não esteja no formato JSON
            resposta.status(400).json({
                'status': false,
                'mensagem': 'Requisição inválida. Apenas POST com dados no formato JSON são aceitos.'
            });
        }
    }
    


    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if ((requisicao.method === 'PATCH'|| requisicao.method === 'PUT') && requisicao.is('application/json')){
            const dados = requisicao.body; //extrair dados do corpo da requisição
            // o codigo será extraido da url, exemplo: http://localhost:3000/cliente/1 1 é o codigo
            const id = requisicao.params.id;
            console.log("id:",id)

            if (id && id > 0){
                const cliente = new Cliente(id, dados.nome, dados.cpf, dados.email, dados.telefone, dados.endereco);
                cliente.atualizar().then(()=>{
                    resposta.status(200);
                    resposta.json({
                        'status': true,
                        'mensagem': 'Cliente atualizado com sucesso!',

                    })
                }).catch((erro)=>{
                    resposta.status(500);
                    resposta.json({
                        'status': false,
                        'mensagem': 'Não foi possivel atualizar o cliente!' + erro.message
                    })
                })
            }
            else{
                resposta.status(400);
                resposta.json({
                    'status': false,
                    'mensagem': 'Codigo invalido!'
                })
            }

        }
        else{
            resposta.status(405);
            resposta.json({
                'status': false,
                'mensagem': 'Requisição inválida!'
            })
        }

    }

    excluir(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'DELETE'){
            //o codigo do cliente que será excluido será extraido da url
            const codigo = requisicao.params.codigo;
            console.log("ID DO EXCLUIDO",codigo);
            if (codigo && codigo > 0){
                const cliente = new Cliente(codigo);
                cliente.excluir()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        'status':true,
                        'mensagem': 'Cliente excluido!',   

                    })
                })
                .catch((erro)=>{
                    resposta.status(500);
                    resposta.json({
                        'status':false,
                        'mensagem': 'Não foi possivel excluir!' + erro.message
                    })
                })
            }
            else{
                resposta.status(400);
                resposta.json({
                    'status': false,
                    'mensagem': 'Informe o usuarioo que deseja excluir!'

                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                'status':false,
                'mensagem': 'Requisição inválida!'
            })
        }

    }

    consultar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'GET'){
            const termoDePesquisa = requisicao.params.termo;
            const cliente = new Cliente(0);
            cliente.consultar(termoDePesquisa)
            .then((clientes)=>{
                resposta.status(200);
                resposta.json(clientes);
            })
            .catch((erro)=>{
                resposta.status(500);
                resposta.json({
                    'status': false,
                    'mensagem': 'Não foi possivel consultar o cliente!' + erro.message

                })
            })
        }
        else{
            resposta.status(405);
            resposta.json({
                'status':false,
                'mensagem': 'Requisição inválida! dentro da consultar'
            })
        }
        
    }
    consultar1(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'GET'){
            //const termoDePesquisa = requisicao.params.termo;
            const cliente = new Cliente(0);
            cliente.consultar1()
            .then((clientes)=>{
                resposta.status(200);
                resposta.json(clientes);
            })
            .catch((erro)=>{
                resposta.status(500);
                resposta.json({
                    'status': false,
                    'mensagem': 'Não foi possivel consultar o cliente!' + erro.message

                })
            })
        }
        else{
            resposta.status(405);
            resposta.json({
                'status':false,
                'mensagem': 'Requisição inválida! dentro da consultar'
            })
        }
        
    }
}   

