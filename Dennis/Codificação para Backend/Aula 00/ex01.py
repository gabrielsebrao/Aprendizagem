from time import sleep

while True:
    opcao = int(input("""Informe uma opção: 
1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão
5 - Sair do programa
Opção: """))
    
    match opcao:
        case 1:
            num1 = int(input("Informe o primeiro número: "))
            num2 = int(input("Informe o segundo número: "))
            soma = num1 + num2
            print(f"Resultado de {num1} + {num2}: {soma}")
        case 2:
            num1 = int(input("Informe o primeiro número: "))
            num2 = int(input("Informe o segundo número: "))
            subtracao = num1 - num2
            print(f"Resultado de {num1} - {num2}: {subtracao}")
        case 3: 
            num1 = int(input("Informe o primeiro número: "))
            num2 = int(input("Informe o segundo número: "))
            multiplicacao = num1 * num2
            print(f"Resultado de {num1} x {num2}: {multiplicacao}")
        case 4:
            num1 = int(input("Informe o primeiro número: "))
            num2 = int(input("Informe o segundo número: "))
            divisao = num1 / num2
            print(f"Resultado de {num1} / {num2}: {divisao}")
        case 5:
            print("Obrigado por visitar nosso sistema!") 
            break
        case _: 
            print("Digite uma opção válida!")
    sleep(2)