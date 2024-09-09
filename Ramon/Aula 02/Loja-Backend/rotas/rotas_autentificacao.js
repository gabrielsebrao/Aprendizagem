const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_autentificacao')

router.post('', controlador.login)

module.exports = router