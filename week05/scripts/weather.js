const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'http://api.openweathermap.org/data/2.5/  ';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready )
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.___}&deg;F`;
    const iconsrc = 'https//openweathermap.org/img//${____}.{___}`;'
    let desc = data.weather[0].____;
    weatherIcon.setAttribute('____', ____);
    weatherIcon.setAttribute('____', ____);
    captionDesc.textContent = `${desc}`;
}