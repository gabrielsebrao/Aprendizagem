const express = require('express')
const db = require('../db.json')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {email, senha} = req.body
    const lista_clientes = db.clientes

    if(!email || !senha) {
        res.send({erro: 'email ou senha nao enviado'})
    }

    const cliente = lista_clientes.find(
        (cliente) => cliente?.email == email
    )

    if(!cliente) {
        res.status(404).send({error: 'conta nao existe'})
    }

    const isSenhaValida = bcrypt.compareSync(senha, cliente.senha)

    if(!isSenhaValida) {
        res.send({error: 'a senha nao e valida'})
    }

    const token = jwt.sign(
        {
            nome: cliente.nome,
            email: cliente.email,
            _id: cliente.id
        },
        'jwt_secret_key',
        { expiresIn: 1000*60*60*24*365 }
    )

    console.log(token)

    res.cookie("TokenAulaBE", token).send({message: 'ok'})
} 

module.exports = {login}