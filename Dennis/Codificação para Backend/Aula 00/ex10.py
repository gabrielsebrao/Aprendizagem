n = [1, 1]
for c in range(2, 298):
    n.append(n[c-2]+n[c-1])
print(n)