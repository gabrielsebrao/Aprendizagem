var alunos = new Array(3)

alunos[0][0] = "Ana"
alunos[0][1] = 50
alunos[1][0] = "Fábio"
alunos[1][1] = 25
alunos[2][0] = "Fulano"
alunos[2][1] = 32

for(let [aluno, nota] of alunos) {
    console.log(`Aluno: ${aluno}, Nota: ${nota}`) 
}