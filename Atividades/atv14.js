//14

let vendas = ["carro", "moto", "caminhao", "jetski", "aviao", "carro", "moto", "jetski", "carro", "jetski"];

function contarVendas(array) {
    let contagem = {}; 

    for (let produto of array) {
        if (contagem[produto]) {
            contagem[produto] += 1; 
        } else {
            contagem[produto] = 1; 
        }
    }
    return contagem; 
}

let resultadoContagem = contarVendas(vendas);
console.log(resultadoContagem);
