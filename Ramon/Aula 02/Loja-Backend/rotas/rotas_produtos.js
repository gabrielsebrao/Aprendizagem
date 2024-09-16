const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_produtos')
const { validadorDeCookie } = require('../middlewares/validador_cookie')

router.get('', validadorDeCookie, controlador.listProdutos)
router.get('/:id', validadorDeCookie,  controlador.getProduto)
router.post('', validadorDeCookie,  controlador.createProduto)
router.post('/:id', validadorDeCookie,  controlador.updateProduto)
router.delete('/:id', validadorDeCookie,  controlador.deleteProduto)

module.exports = router;