for(let i = 1; i <= 50; i++) {

    vezesMult = 0

    for(let j = 1; j <= i; j++) {
        if(i%j==0) 
            vezesMult++
    }
    if(vezesMult == 2) {
        console.log(i)
    }
}