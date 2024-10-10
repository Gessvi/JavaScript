document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if(!cityName){
        return showAlert('Você precisa digitar uma cidade...');
    }

    const apiKey = '9e8a2cf1b40e25776f54b2d5d4c5bf05'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encondeURT(cityName)}&appid=${apiKey}&units=metric&Lang=pt_br`

    const results = await fetch(apiUrl);
    const json = await results.json();

    console.log(json);

});

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}