const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=9e7bbf1ed19a6be3b7439a78e5e9e589&units=imperial';

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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    // let description = data.weather[0].description;
    figcaption.setAttribute('SRC', iconsrc);
    figcaption.setAttribute('alt', data.weather[0].description);
    // captionDesc.textContent = `${desc}`;
    description.innerHTML = `${data.weather[0].description}`;
    // let description2 = `${data.weather[0].description}`;
    `${data.weather[0].description}`;
    description2.textContent = `${data.name}`;
}

apiFetch();