//09

function contarCaracteres(texto){
    let contador = 0;
    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        if ('abcdefghijklmnopkrstuvxwyz'.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

let resultado = contarCaracteres('Ola, Mundo');
console.log(`Total de Caracteres: ${resultado}`);
