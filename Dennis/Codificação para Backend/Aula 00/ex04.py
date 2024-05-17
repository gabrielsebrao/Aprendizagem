soma = 0
for c in range(3):
    soma += int(input(f"Informe a nota da prova {c+1}: "))
media = soma/3
print(f"A média das 3 notas é: {media}")