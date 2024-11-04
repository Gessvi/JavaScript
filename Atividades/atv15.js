//15

let produtos = {
    "Farinha": 12,
    "Massa de Bolo": 50,
    "Açúcar": 120,
    "Ovos": 150,
    "Leite": 200
};

let produtosCaros = []

for (let produto in produtos) {
    if (produtos[produto] >= 100) {
        produtosCaros.push({nome: produto, preco: produtos[produto]});
        
    }
}
console.log("Produtos com preço acima de 100:");
produtosCaros.forEach(produto => {
    console.log(`${produto.nome}: ${produto.preco}`);
});