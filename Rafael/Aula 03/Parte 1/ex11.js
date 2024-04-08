contPares = 0
contImpares = 0

for(let i = 1; i <= 100; i++) {
    if(i%2==0)
        contPares++
    else    
        contImpares++
}

console.log(`Pares: ${contPares}`)
console.log(`Ímares: ${contImpares}`)