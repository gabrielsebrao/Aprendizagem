let nomes = ["Ana", "Bruno", "Carla", "Daniel", "Elena", "Francisco"]

function buscarNome(nomes, nome) {
    if(nomes.indexOf(nome) > -1)  
        return nomes.indexOf(nome)
    else
        return "indice nao encontrado" 
}

console.log(buscarNome(nomes, "Ana"))