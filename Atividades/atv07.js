//07

let salarios = {
    "Liana": 2500,
    "Merliah": 3200,
    "Alexa": 1800,
    "Elina": 2900,
    "Tori": 2400
};


let soma = 0;


for (let pessoa in salarios) {
    soma += salarios[pessoa];
    media = soma/5
}


console.log("A média total dos salários é: " + media);
