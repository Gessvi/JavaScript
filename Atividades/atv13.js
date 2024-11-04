//13

let notasAlunos = {
    "Odette": 9.5,
    "Corrine": 7.2,
    "Annika": 5.6,
    "Anneliese": 10,
    "Barbie": 4.3
};


let soma = 0;
let media = 0;

for (let notas in notasAlunos) {
    soma += notasAlunos[notas]
    
}

media = soma / 5;
console.log("Média das notas: " + media.toFixed(2));
