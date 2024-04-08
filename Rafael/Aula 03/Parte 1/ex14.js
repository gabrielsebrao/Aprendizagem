numero = 13
vezesMult = 0

for(let i = 1; i <= numero; i++) {
    if(numero%i==0) {
        vezesMult++
    }
}

if(vezesMult == 2) 
    console.log(`${numero} é primo!`)
else
    console.log(`${numero} não é primo!`)