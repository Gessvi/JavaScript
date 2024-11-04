//12

let estoque = {
    chocolate: 10,
    iogurte: 1,
    biscoito: 4,
    doce: 28,
    picole: 2
};

for (let produto in estoque) {
    if (estoque[produto] < 5) {
        estoque[produto] += 10;
    }
}

console.log(estoque);
