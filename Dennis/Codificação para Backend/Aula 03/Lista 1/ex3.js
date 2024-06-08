const objeto = {
    nome: "Gabriel",
    idade: 17,
    sexo: "masculino"
}

console.log(keysObj(objeto))

function keysObj(obj) {
    return Object.keys(obj)
}