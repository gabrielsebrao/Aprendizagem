numero = prompt("Digite um número para saber seu fatorial: ")
resultado = 1

for(let i = 1; i <= numero; i++) {
    resultado *= i
}

alert(`O resultado do fatorial de ${numero} é ${resultado}`)