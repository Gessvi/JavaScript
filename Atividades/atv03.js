//03
let alunos = {
    "Odette": 9,
    "Corrine": 7,
    "Annika": 5,
    "Anneliese": 10,
    "Barbie": 4
};


let Aprovados = 0;


for (let aluno in alunos) {
    if (alunos[aluno] >= 7) {
        console.log(aluno + " passou com a nota: " + alunos[aluno]);
    }
    
}