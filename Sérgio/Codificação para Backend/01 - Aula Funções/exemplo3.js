let lista = [32, 68, 12, 44, 6]

let verificarPares = lista.every((itens) =>
{
    return itens % 2 == 0;
})

verificarPares ? console.log("Todos são pares") : console.log("Nem todos são pares")