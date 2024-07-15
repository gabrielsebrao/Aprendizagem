var person = {
    name: "Daniel",
    age: 20,
    isMinor: false,
    hobbies: ["xadrez", "jogar", "ler"],
    escola: {
        nome: "Senai",
        id: "1002"
    },
    saudacao: function() {
        console.log(`Olá, ${this.name}!`)
    },
    cnh: null,
    pai: undefined
}

person.saudacao()