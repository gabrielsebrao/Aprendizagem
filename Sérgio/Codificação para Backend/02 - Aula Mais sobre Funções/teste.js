let lista = [5, 10, 20, 30]

let divisiveisPorCinco = lista.every(function(numeros)
{
    return numeros % 5 == 0
})

console.log(divisiveisPorCinco)