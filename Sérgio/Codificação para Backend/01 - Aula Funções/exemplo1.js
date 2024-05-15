function calcularAreaTerreno(largura, profundidade)
{
    let areaTotal = largura * profundidade
    return areaTotal
}

var MedidaMansao = calcularAreaTerreno(100, 100)
var MedidaPadrao = calcularAreaTerreno(50, 40)
var MedidaSobrando = calcularAreaTerreno(30, 40)
var MedidaComercial = calcularAreaTerreno(40, 40)

console.log(MedidaMansao+" m2")
console.log(MedidaPadrao+" m2")
console.log(MedidaSobrando+" m2")
console.log(MedidaComercial+" m2")