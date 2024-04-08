resultado = 0
for(let i = 0; i < 5; i++) {
    numero = Number(prompt("Digite um número para a soma: "))
    if(numero > 7) {
        resultado += numero  
    }
}
alert("Apenas os números acima de 7 foram somados. Resultado: "+resultado)