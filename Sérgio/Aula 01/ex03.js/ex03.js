contador = 0
total = 0
vezes = Number(prompt("Digite um númeo de vezes a ser repetido:"))

while(contador < vezes) {
    numero = Number(prompt("Digite um número para soma: "))
    total += numero
    contador++
}

alert("Resultado total das somas: "+total)