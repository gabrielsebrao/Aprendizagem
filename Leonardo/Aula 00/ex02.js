let catalogo = [
    {modelo: "gurgel", ano: 1981},
    {modelo: "monza", ano: 1980},
    {modelo: "palio", ano: 2000},
    {modelo: "siena", ano: 2008}
]

console.log(catalogo.sort((a, b) => a.ano-b.ano))
console.log(catalogo.sort((a, b) => b.ano-a.ano))