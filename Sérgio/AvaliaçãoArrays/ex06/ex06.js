var numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var numerosImpares = []

for(numero in numeros) {
    numeros[numero] = prompt("Digite um número: ")
    if(numeros[numero] % 2 != 0)
        numerosImpares.push(numeros[numero])
}

alert(`Lista de números ímpares dos quais voce citou: ${numerosImpares}`)

