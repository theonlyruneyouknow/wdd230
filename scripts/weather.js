const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=44.08&lon=-123.03&appid=9e7bbf1ed19a6be3b7439a78e5e9e589&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready )
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = 'https//openweathermap.org/img/${weather.icon}.png`;'
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('iconsrc', desc);
    weatherIcon.setAttribute('iconsrc', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();