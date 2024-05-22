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
    {
        document.getElementById(nomeBotao).innerHTML = "O"
        document.getElementById(nomeBotao).style.color = "blue"
    }

    else   
    {
        document.getElementById(nomeBotao).innerHTML = "X"
        document.getElementById(nomeBotao).style.color = "red"
    }
        
    document.getElementById(nomeBotao).disabled = true
    jogada++

    encerraJogo()
}

function encerraJogo()
{

    if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText && document.getElementById("bt00").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt00").innerText)
    }

    if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText && document.getElementById("bt10").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt10").innerText)
    }

    if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText && document.getElementById("bt20").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt20").innerText)
    }

    if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText && document.getElementById("bt10").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt00").innerText)
    }

    if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText && document.getElementById("bt01").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt01").innerText)
    }

    if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText && document.getElementById("bt02").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt02").innerText)
    }

    if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText && document.getElementById("bt00").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt00").innerText)
    }

    if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText && document.getElementById("bt11").innerText != "")
    {
        alert("Jogo Finalizado!\nVencedor: " + document.getElementById("bt11").innerText)
    }

}