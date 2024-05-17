palavra = input("Insira uma palavra: ")
palavraInvertida = ""
for c in range(len(palavra)-1, -1, -1):
    palavraInvertida += palavra[c]

if palavra == palavraInvertida:
    print(f"A palavra {palavra} é um palíndromo!")
else:
    print(f"A palavra {palavra} não é um palíndromo!")
    print(palavraInvertida)