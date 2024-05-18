salario = int(input("Insira o seu salário: "))
aumento = int(input("Qual será o seu aumento? (em porcentagem): "))

salario *= 1+aumento*0.01
print(f"O seu salário foi aumentado para: R${salario:.2f}")