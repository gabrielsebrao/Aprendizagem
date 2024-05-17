frase = input("Digite uma frase que quiser: ")
vogais = 0
consoantes = 0

for letra in frase:
    if letra in ("aeiouAEIOU"):
        vogais += 1
    if letra in ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"):
        consoantes += 1

print(f"Na sua frase há {vogais} vogais e {consoantes} consoantes.")