// vendasRota.js

import { Router } from 'express';
import VendaController from '../Controle/vendaController.js';

const rotaVendas = new Router();
const vendaCtrl = new VendaController();

rotaVendas
    .get('/:id', vendaCtrl.consultar)  
    .post('/', vendaCtrl.gravar)
    .put('/:id', vendaCtrl.atualizar)
    .delete('/:id', vendaCtrl.excluir);

export default rotaVendas;
