//11
let palavras = ["maçã", "banana", "uva", "morango", "abacaxi"];

function contarCaracteres(array) {
    let resultado = {};

    for (let palavra of array) {
        resultado[palavra] = palavra.length;
    }

    return resultado;
}

let contagemCaracteres = contarCaracteres(palavras);
console.log(contagemCaracteres);
