const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const isPalindrome = require('./isPalindrome')

app.use(bodyParser.json())

app.post('/isPalindrome', function (req, res) {
    console.log(req.body)
    res.send(isPalindrome(req.body.palavra))
})

app.listen(8000)