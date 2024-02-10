const currentTemp = document.querySelector('#current-temp');
const currentTemp2 = document.querySelector('#current-temp2');
const currentTemp3 = document.querySelector('#current-temp3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

// const url = 'http://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=9e7bbf1ed19a6be3b7439a78e5e9e589&units=imperial';
const url = 'http://127.0.0.1:5500/week05/scripts/family.json';

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
    currentTemp.innerHTML = `${data.member[0].householdMembers.length}&deg;F`;
    currentTemp2.innerHTML = `${data.member[0].familyName}&deg;F`;
    currentTemp3.innerHTML = `${data.member[0].householdMembers[0].name}&deg;F`;
    // description.innerHTML = `${data.weather[0].description}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    figcaption.setAttribute('SRC', iconsrc);
    figcaption.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
}

apiFetch();