var tabuleiro = [[[], [], []], [[], [], []], [[], [], []]]

console.log(tabuleiro[0])

for(let i = 0; i < tabuleiro.length; i++) {
    for(let j = 0; j < tabuleiro[i].length; j++) {
        console.log("oi")
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', 'bt' + i + "" + j)
        botao.setAttribute('class', 'btjogo' + i)
        botao.setAttribute('onclick', '')
        botao.append(document.createTextNode(""))
        document.body.append(botao)
    }
}