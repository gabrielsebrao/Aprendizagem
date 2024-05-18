num = int(input("Insira um número: "))
vezesDivisivel = 0

for i in range(1, num+1):
    if num % i == 0:
        vezesDivisivel += 1

if vezesDivisivel == 2:
    print(f"O número {num} é primo!")
else:
    print(f"O número {num} NÃO é primo!")