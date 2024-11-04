//10
let produtos = {
    "Farinha": 12,
    "Massa de Bolo": 50,
    "Açúcar": 120,
    "Ovos": 150,
    "Leite": 200
};


let desconto = 0;
let descontoFinal = 0;


for (let preco in produtos) {
    if (produtos[preco] >= 100) {
        desconto = produtos[preco] * 0.15; 
        descontoFinal = produtos[preco] - desconto; 
        console.log(`${preco} custa R$${produtos[preco]} com desconto: R$${descontoFinal.toFixed(2)}`);
    }
}