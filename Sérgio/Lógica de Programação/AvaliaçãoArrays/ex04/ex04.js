notas = [0, 0, 0, 0, 0]
notasAcimaDe5 = []
soma = 0

for(nota in notas) {
    prompt("Digite o nome do aluno: ")
    notas[nota] = Number(prompt("Digite a nota desse aluno: "))

    if(notas[nota] > 5)
        notasAcimaDe5.push(notas[nota])
}

for(nota in notasAcimaDe5) {
    soma += notasAcimaDe5[nota]
}

media = soma / notasAcimaDe5.length

alert(`A média da(s) nota(s) acima de 5 é: ${media}`)
