var pessoa = {
    nome: "Gabriel",
    saudacao: function() {
        console.log(`Oi! Eu sou ${this.nome}.`)
    }
}

pessoa.saudacao()