function mostrarNome() {
    let nome = prompt("Qual é o seu nome?")
    const nomeObj = document.getElementById('nome')
    nomeObj.innerHTML = `${nome}`
}

mostrarNome()

