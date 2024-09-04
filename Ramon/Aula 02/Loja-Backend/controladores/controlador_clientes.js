const db = require('../db.json')
const { v4: uuidv4 } = require('uuid')
const bcryptjs = require('bcryptjs')
const fs = require('fs')


const listClientes = async (req, res) => {
    var clientes = db.clientes
    res.json(clientes)
}

const getCliente = async (req, res) => {
    const _id = req.params.id
    const listaClientes = db.clientes
    const cliente = listaClientes.find(
        (cliente) => cliente.id == _id
    )

    cliente ? res.send(cliente) : res.status(404).send({ error: 'not found' })
}

const createCliente = async (req, res) => {
    const dados = req.body
    if (!dados.nome || !dados.email || !dados.senha) {
        res.status(406).send({ error: 'Nome, email ou senha devem ser informados' })
        return
    }

    const _id = uuidv4()
    dados.id = _id

    const _senha = bcryptjs.hashSync(dados.senha, 10)
    dados.senha = _senha

    db.clientes.push(dados)

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            res.status(500).send({ error: 'erro no servidor' })
            return
        }
    })

    res.status(204).send()
}

const updateCliente = async (req, res) => {
    const _id = req.params.id
    const dados = req.body
    const listaClientes = db.clientes
    const cliente = listaClientes.find(
        (cliente) => cliente.id == _id
    )

    if (!cliente) {
        res.status(404).send({ error: 'not found' })
        return
    }

    if(!dados.nome && !dados.email && !dados.senha && !dados.endereco) {
        res.status(406).send({ error: 'insira dados' })
        return
    }

    for (const dado in dados) {
        if (!dado in cliente) continue
        cliente[dado] = dados[dado]
    }

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            res.status(500).send({ error: 'erro no servidor' })
            return
        }
    })

    res.status(200).send({ cliente })
}

const deleteCliente = async (req, res) => {
    const _id = req.params.id
    const listaClientes = db.clientes
    
    const cliente = listaClientes.find(
        (cliente) => cliente.id == _id
    )

    if(!cliente) {
        res.status(404).send({ error: 'cliente não encontrado' })
        return
    }

    var index = listaClientes.indexOf(cliente)
    listaClientes.splice(index, 1)

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err) {
            res.status(500).send({ error: 'erro no servidor' })
            return
        }
    })

    res.status(200).send({ ok: 'cilente deletado' })
}

module.exports = { listClientes, getCliente, createCliente, updateCliente, deleteCliente }