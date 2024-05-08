var produtos = [0, 0, 0, 0, 0]
var precos = [0, 0, 0, 0, 0]

var maioresValor = []
var resultado = ''

var maiores100Valor = []
soma = 0
media = 0

var inferiorValor = 0

for(i in produtos) {
    produtos[i] = prompt("Digite o produto: ")
    precos[i] = Number(prompt("Digite o seu preço: "))

    if(precos[i] < 50) 
        inferiorValor++

    if(precos[i] >= 50 && precos[i] <= 100)
        maioresValor.push(produtos[i])

    if(precos[i] > 100)
        maiores100Valor.push(precos[i])
}

for(i in maioresValor) {
    if(i == 0) 
        resultado += maioresValor[i]
    else if(i != maioresValor.length-1)
        resultado += `, ${maioresValor[i]}`
    else
        resultado += ` e ${maioresValor[i]}`
}

for(i in maiores100Valor) {
    soma += maiores100Valor[i]
    media = soma/(maiores100Valor.length)
}

if(inferiorValor == 1)
    alert(`Há ${inferiorValor} produto inferior a R$50,00.`)
else
    alert(`Há ${inferiorValor} produtos inferiores a R$50,00.`)

if(resultado != '') {
    if(maioresValor.length == 1) {
            alert(`O produto ${resultado.toLowerCase()} está entre R$50,00 e R$100,00.`)
        }
        else {
            alert(`Os produtos ${resultado.toLowerCase()} estão entre R$50,00 e R$100,00.`) 
        }
}
else {
    alert("Não há produtos entre R$50,00 e R$100,00.")
}
    

alert(`A média do(s) produto(s) acima de R$100,00 é R$${media},00.`)
