var tabuleiro = [[[], [], []], [[], [], []], [[], [], []]]
var jogada = 0

for(let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++) {
        console.log("oi")
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', 'bt' + i + "" + j)
        botao.setAttribute('class', 'btjogo'+i)
        botao.setAttribute('onclick', 'marcar('+i+','+j+')')
        botao.append(document.createTextNode(""))
        document.body.append(botao)
    }
}

function marcar(linha, coluna)  
{
    marcarCasa("bt"+linha+coluna)
}

function marcarCasa(nomeBotao)
{
    if(jogada % 2 == 0)
        document.getElementById(nomeBotao).innerHTML = "O"
    else   
        document.getElementById(nomeBotao).innerHTML = "X"

    document.getElementById(nomeBotao).disabled = true

    jogada++
}