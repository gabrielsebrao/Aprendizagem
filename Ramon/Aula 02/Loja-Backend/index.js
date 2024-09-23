require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load("./docs/documentation.yaml")

const rotasProdutos = require('./rotas/rotas_produtos')
const rotasClientes = require('./rotas/rotas_clientes')
const rotasAutentificacao = require('./rotas/rotas_autentificacao')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)
app.use('/auth', rotasAutentificacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(8000)

module.exports = app