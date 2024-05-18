import random
numRandom = random.randint(1, 100)

while True:
    numJogador = int(input("Adivinhe o número gerado pela máquina: "))

    if numJogador == numRandom:
        print("Acertou!")
        break
    else:
        print("Errou! Tente de novo.")