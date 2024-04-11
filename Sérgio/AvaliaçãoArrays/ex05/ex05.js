var numeros = [1, 5, 23, 65, 23, 54, 12, 1]
var maiorNumero = 0

for(numero in numeros) {
    if(numeros[numero] > maiorNumero) 
        maiorNumero = numeros[numero]
}

console.log(`O maior número é: ${maiorNumero}`)