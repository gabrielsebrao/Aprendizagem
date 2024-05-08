numero1 = Number(prompt("Digite o primeiro número: "))
numero2 = Number(prompt("Digite o segundo número: "))
operador = prompt("Escolha um dos operadores aritméticos a seguir.\n(1) Adição +\n(2) Subtração -\n(3) Multiplicação x\n(4) Divisão /")

switch(operador) {
    case '+': 
        alert(`${numero1} + ${numero2} = ${numero1+numero2}`)
        break
    case '-': 
        alert(`${numero1} - ${numero2} = ${numero1-numero2}`)
        break
    case '*':
    case 'X':
    case 'x': 
        alert(`${numero1} x ${numero2} = ${numero1*numero2}`)
        break
    case '/': 
        alert(`${numero1} / ${numero2} = ${numero1/numero2}`)
        break
}