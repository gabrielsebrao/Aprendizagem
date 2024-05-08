var numeros = [0, 0, 0]

for(numero in numeros) {
    numeros[numero] = prompt("Digite um número para ser inserido no array: ")
}

alert(`Array que você formou: ${numeros}`)
alert(`O seu array foi revertido! Agora está como: ${numeros.reverse()}`)