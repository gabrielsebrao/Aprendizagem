const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_autentificacao')
const { validadorDeCookie } = require('../middlewares/validador_cookie')

router.post('/login', controlador.login)
router.post('/logout', validadorDeCookie, controlador.logout)

module.exports = router