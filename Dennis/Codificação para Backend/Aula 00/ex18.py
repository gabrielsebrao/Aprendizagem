minutos = int(input("Insira um valor em minutos: "))
horasMinutos = [0, minutos]

while horasMinutos[1] >= 60:
    horasMinutos[1] -= 60
    horasMinutos[0] += 1

print(f"{minutos} minutos = {horasMinutos[0]}:{horasMinutos[1]:02n}h")