//08
let listaCompras = {
    sabonete: 5,
    qboa: 2,
    feijao: 3,
    macarrao: 8,
    biscoito: 10
};

let total = 0;

for(let valor in listaCompras){
    total += listaCompras[valor];
}

console.log("Total de quantidade a ser comprada: " + total);
