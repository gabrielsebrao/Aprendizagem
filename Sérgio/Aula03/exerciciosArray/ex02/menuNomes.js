var opcao = 1
var nomes = []
nomesFrase = ''

while (opcao != 0) {
    alert("=========MENU=========\n1 - Cadastrar nome.\n2 - Excluir nome.\n3 - Pesquisar se um nome está cadastrado.\n4 - Listar todos os nomes cadastrados em ordem alfabética.\n0 - Sair do programa.")
    opcao = Number(prompt("Digite sua opção: "))

    switch(opcao) {
        case 1:
            nome = prompt("Digite um nome: ")

            nomes.push(nome)
            alert(`${nome} adicionado!`)
            console.log(nomes)
            break
        
        case 2:
            nome = prompt("Digitie um nome que você quer excluir: ")

            nomes.pop(nome)
            alert(`${nome} removido!`)
            console.log(nomes)
            break

        case 3:
            nome = prompt("Digite um nome para verificar se ele existe: ")

            if(nomes.includes(nome))
                alert(`${nome} está na lista.`)
            else 
                alert(`${nome} não está na lista.`)
            break
        
        case 4: 
            for(nome in nomes) {
                if(nome == 0)
                    nomesFrase += nome
                else if(nome == nomes.length)
                    nomesFrase += ` e ${nome}`
                else
                    nomesFrase += `, ${nome}`
            }

            alert(`A lista de nomes é: ${nomesFrase}.`)
    }
}