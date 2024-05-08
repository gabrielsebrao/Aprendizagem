sabores = []
sair = true
textoSabores = ''

while(sair) {
    opcao = Number(prompt("=========MENU=========\n1- Adicionar sabor\n2- Remover sabor\n3- Visualizar sorvete\n4- Finalizar pedido"))

    switch(opcao) {
        case 1: 
            if(sabores.length < 3) {
                sabores.push(prompt("Adicione um sabor: "))
                alert("Sabor adicionado!")
            } else 
                alert("Limite de sabores atingido, remova um sabor!")
            break

        case 2:
            saborRemovido = sabores.indexOf(prompt("Remova um sabor: "))
            if(saborRemovido == -1) 
                alert("Não existem sabores adicionados!")
            else {
                console.log(saborRemovido)
                sabores.splice(saborRemovido, 1)
                alert("Sabor removido!")
            }
            break

        case 3: 
            if(sabores.length == 0) 
                alert("Seu sorvete não possui sabores!")
            else {
                for(sabor in sabores) {
                    if(sabor < sabores.length-1)
                        textoSabores += `Camada ${Number(sabor)+1}: Sabor ${sabores[sabor]}\n`
                    else
                        textoSabores += `Camada ${Number(sabor)+1}: Sabor ${sabores[sabor]}`
                }
                alert(textoSabores)
                textoSabores = ''
            }
            break

        case 4:
            if(sabores.length == 0)
                alert("Adicione pelo menos um sabor!")
            else {
                alert("Pedido realizado!")
                sair = false
            }
    }
}