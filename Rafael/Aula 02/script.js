function efetuarLogin() {
    let objUsuario = document.getElementById("inpNome")
    let objSenha = document.getElementById("inpSenha")

    if(objUsuario.value==="Dev" && objSenha.value==="12345") {
        alert("Logado!")
    } else {
        alert("Acesso negado!")
    }

    objSenha.value = ''
    objUsuario.value = ''

    objUsuario.focus()
}