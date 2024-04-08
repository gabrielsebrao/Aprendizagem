numero = document.getElementById("inpNumero")
resultado = document.getElementById("resultado")

function gerarTabuada() {
    resultado.innerHTML = ''
    for(let i = 1; i <=10; i++) {
        resultado.innerHTML += `${numero.value} x ${i} = ${(numero.value)*i} <br>`
    } 
}

