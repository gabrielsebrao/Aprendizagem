lista = [2, 8, 6, 31, 8]

maiorNumero = 0
menorNumero = 0

for(i in lista) {
    if(i==0) {
        maiorNumero = lista[i]
        menorNumero = lista[i]
    } else {
        if(lista[i] > maiorNumero) {
            maiorNumero = lista[i]
        }
        if(lista[i] < menorNumero) {
            menorNumero = lista[i]
        }
    }
}

console.log(maiorNumero)
console.log(menorNumero)