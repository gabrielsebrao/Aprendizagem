const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_clientes')
const { validadorDeCookie } = require('../middlewares/validador_cookie')

router.get('', validadorDeCookie, controlador.listClientes)
router.get('/:id', validadorDeCookie, controlador.getCliente)
router.post('', controlador.createCliente)
router.post('/:id', validadorDeCookie, controlador.updateCliente)
router.delete('/:id', validadorDeCookie, controlador.deleteCliente)

module.exports = router;