let nome=""
let acumulador=""

while(nome != "pare") {
    nome=prompt("Digite um nome ou para para sair")

    if(nome == "pare") {
       nome = acumulador
        break 
    }
        
    acumulador = nome
}

alert("Bem vindo, "+nome+"!")