//06

let notas = {
    "Odette": 9,
    "Corrine": 7,
    "Annika": 5,
    "Anneliese": 10,
    "Barbie": 4
};

let maiorNota = -Infinity
let menorNota = Infinity




for (let aluno in notas) {
    let notaAtual = notas[aluno];

    if (notaAtual > maiorNota) {
        maiorNota = notaAtual;
    }

    if (notaAtual < menorNota) {
        menorNota = notaAtual;
    }
}

console.log("A maior nota é: " + maiorNota);
console.log("A menor nota é: " + menorNota);
