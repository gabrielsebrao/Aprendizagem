preco = int(input("Insira o preço de um produto: "))
desconto = int(input("Insira o desconto do produto (em porcentagem): "))

preco *= 1-desconto*0.01
print(f"O preço do produto cairá para: R${preco:.2f}")