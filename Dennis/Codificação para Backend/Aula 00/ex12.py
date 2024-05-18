altura = float(input("Insira sua altura: "))
peso = float(input("Insira seu peso: "))
imc = peso/(pow(altura, 2))

print(f"Seu IMC é {imc*10000:.2f} kg/m³.")