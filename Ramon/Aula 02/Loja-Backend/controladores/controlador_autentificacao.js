const express = require('express')
const db = require('../db.json')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {email, senha} = req.body
    const lista_clientes = db.clientes

    if(!email || !senha) {
        res.status(400).send({erro: 'email ou senha nao enviado'})
        return
    }

    const cliente = lista_clientes.find(
        (cliente) => cliente?.email == email
    )

    if(!cliente) {
        res.status(404).send({error: 'conta nao existe'})
        return
    }

    const isSenhaValida = bcrypt.compareSync(senha, cliente.senha)
    if(!isSenhaValida) {
        res.status(401).send({erro: 'a senha nao e valida'})
        return 
    }

    const token = jwt.sign(
        {
            nome: cliente.nome,
            email: cliente.email,
            _id: cliente.id
        },
        process.env.chave_criptografia,
        { expiresIn: 1000*60*60*24*365 }
    )

    console.log(token)

    res.cookie("TokenAulaBE", token).send({message: 'ok'})
} 

const logout = async (req, res) => {
    res.cookie('TokenAulaBE', 'none', expiresIn=5)
    res.send({message: 'O usuário fez logout'})
} 

module.exports = {login, logout}