vezes = Number(prompt("Digite a quantidade de números que você quer dentro da média: "))
contador = 0
total = 0

while(contador<vezes) {

    numero = Number(prompt("Digite um número para a média: "))
    total += numero

    contador++
}

media = total/vezes
alert("Média: "+media)