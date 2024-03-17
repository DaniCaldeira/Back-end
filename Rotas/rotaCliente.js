// é uma micro apliacação express que se encarrega de processar
//requisições em uma determinado endpoint

import {Router} from 'express';
import ClienteController from '../Controle/clienteController.js';

const rotaCliente = new Router();
const cliCtrl = new ClienteController();

rotaCliente
.get('/', cliCtrl.consultar)
.get('/:termo', cliCtrl.consultar)
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);

export default rotaCliente;

