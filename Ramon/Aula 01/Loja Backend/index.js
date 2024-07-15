const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const db = require('./bd.json')

app.get('/produtos', function (req, res) {
    var produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', function (req, res) {
    const id = req.params.id
    res.send(data.)
})

app.listen(8000)