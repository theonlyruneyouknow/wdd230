const url = 'data/members.json';
const cards = document.querySelector('#cards');

// const newsection = document.createElement("section"); let and not const
// const fullName = document.createElement("h2");let and not const
// const logo = document.createElement("img");let and not const
// create an img element and store it in a variable named "logo",
// create an h2 element and store it in a variable named "fullName",

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element

        let card = document.createElement('section');
        let CompanyName = document.createElement('h2'); // fill in the blank
        let Webpage = document.createElement('p'); // fill in the blank
        let Adress = document.createElement('p'); // fill in the blank
        let Phone = document.createElement('p'); // fill in the blank
        let logo = document.createElement('img');
        let url = document.createElement('a');
        // let url = document.createElement('a');

        // Build the h2 content out to show the prophet's full name
        CompanyName.textContent = `${prophet.CompanyName} `; // fill in the blank
        Webpage.textContent = `Webpage: ${prophet.Webpage}`; // fill in the blank
        Adress.textContent = `Adress: ${prophet.Adress}`; // fill in the blank
        Phone.textContent = `Phone: ${prophet.Phone}`; // fill in the blank
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', prophet.logo);
        logo.setAttribute('alt', `logo of ${prophet.CompanyName} `); // fill in the blank
        logo.setAttribute('alt', `logo of ${prophet.CompanyName} `); // fill in the blank
        url.setAttribute('href', `https://${prophet.Webpage}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        // logo.setAttribute('height', '440');
        url.innerHTML = prophet.Webpage;
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(CompanyName);
        card.appendChild(url); //fill in the blank
        // card.appendChild(Webpage); //fill in the blank
        card.appendChild(Adress); //fill in the blank
        card.appendChild(Phone); //fill in the blank

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

// const displayProphets = (prophets) => {
//     // card build code goes here
//     prophets.forEach((prophet) => {

//     });
// }
// async function getProphetData() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
//   getProphetData();

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
}



getProphetData();
