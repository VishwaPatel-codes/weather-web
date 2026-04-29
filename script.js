const apiKey = '136e0b3d22cfba7b5a2951f96d8ccf04';

const button = document.querySelector('button');
const Input = document.querySelector('input');

button.addEventListener("click", () => {
    const city = Input.value;
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found 😭');
                return;
            }
            document.querySelector('.weather-info h3').textContent = data.name;
            
            document.querySelector('.weather-info p:nth-child(2)').textContent = 
                'Temperaturre: ' + Math.round(data.main.temp) + '°C';

            document.querySelector('.weather-info p:nth-child(3)').textContent = 
                'condition: ' + data.weather[0].main;
        });
});