
//04


let pessoas = {
    "Odette": 60,
    "Corrine": 19,
    "Annika": 32,
    "Anneliese": 39,
    "Barbie": 20
};


for (let nome in pessoas) {
    if (pessoas[nome] <= 20) {
        console.log(nome + " está na categoria Jovens")
    }else if (pessoas[nome] <= 40) {
        console.log(nome + " está na categoria Adultos")
    }else{
        console.log(nome + " está na categoria Idosos")
    }
}
