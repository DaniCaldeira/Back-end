// é uma micro apliacação express que se encarrega de processar
//requisições em uma determinado endpoint

import {Router} from 'express';
import ClienteController from '../Controle/clienteController.js';

const rotaCliente = new Router();
const cliCtrl = new ClienteController();

rotaCliente
.get('/:termo', cliCtrl.consultar)  // ROTA PADRÃO ESTA CONSULTADO USAURIO PASSANDO ID POR URL
.get('/', cliCtrl.consultar1)
.post('/cadastrar',cliCtrl.gravarCliente)
.post('/', cliCtrl.gravar) // ALTERAR A ROTA DE GRAVAR PARA GRAVAR O USUARIO
.put('/:id', cliCtrl.atualizar)
.patch('/:id', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);

export default rotaCliente;

