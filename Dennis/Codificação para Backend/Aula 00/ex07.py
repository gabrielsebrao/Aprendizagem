num = int(input("Insira um número: "))
for c in range(num-1, 1, -1):
    num *= c
print(num)