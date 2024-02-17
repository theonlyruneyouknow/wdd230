const url = 'data/discover.json';
// const data = url.json()
// console.log(data)
// console.log(url);
const cards = document.querySelector('#cards');

// const newsection = document.createElement("section"); let and not const
// const fullName = document.createElement("h2");let and not const
// const logo = document.createElement("img");let and not const
// create an img element and store it in a variable named "logo",
// create an h2 element and store it in a variable named "fullName",

const displaymembers = (members) => {
    members.forEach((Member) => {
        // Create elements to add to the div.cards element

        let card = document.createElement('section');
        let Event = document.createElement('h2'); // fill in the blank
        let Webpage = document.createElement('p'); // fill in the blank
        let Location = document.createElement('p'); // fill in the blank
        let Blurb = document.createElement('span'); // fill in the blank
        let Theme = document.createElement('h3'); // fill in the blank
        let Season = document.createElement('p'); // fill in the blank
        let Date = document.createElement('p'); // fill in the blank
        // let  = document.createElement('p'); // fill in the blank
        // let  = document.createElement('p'); // fill in the blank
        let logo = document.createElement('img');
        let url = document.createElement('a');
        // let url = document.createElement('a');

        // Build the h2 content out to show the Member's full name
        Event.textContent = `${Member.Event} `; // fill in the blank
        Theme.textContent = `${Member.Theme} `; // fill in the blank
        Season.textContent = `${Member.Season} `; // fill in the blank
        Date.textContent = `When: ${Member.Date} `; // fill in the blank
        Webpage.textContent = `Webpage: ${Member.Webpage}`; // fill in the blank
        Location.textContent = `Location: ${Member.Location}`; // fill in the blank
        Blurb.textContent = `${Member.Blurb}`; // fill in the blank
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', Member.logo);
        logo.setAttribute('alt', `logo of ${Member.logo} `); // fill in the blank
        logo.setAttribute('alt', `logo of ${Member.logo} `); // fill in the blank
        url.setAttribute('href', `${Member.Webpage}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        // logo.setAttribute('height', '440');
        url.innerHTML = Member.Webpage;
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(Event);
        card.appendChild(Theme); //fill in the blank
        // card.appendChild(Season); //fill in the blank
        card.appendChild(Date); //fill in the blank
        // card.appendChild(Webpage); //fill in the blank
        card.appendChild(Location); //fill in the blank
        card.appendChild(url); //fill in the blank
        card.appendChild(Blurb); //fill in the blank

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

// const displaymembers = (members) => {
//     // card build code goes here
//     members.forEach((Member) => {

//     });
// }
// async function getMemberData() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
//   getMemberData();

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.discover); // temporary testing of data retreival
    displaymembers(data.discover);
}



getMemberData();
