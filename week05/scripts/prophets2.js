const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const url2 = 'https://theonlyruneyouknow.github.io/wdd230/data/links.json';
const url3 = 'http://127.0.0.1:5500/week05/scripts/family.json';
const cards = document.querySelector('#cards');

// const newsection = document.createElement("section"); let and not const
// const fullName = document.createElement("h2");let and not const
// const portrait = document.createElement("img");let and not const
// create an img element and store it in a variable named "portrait",
// create an h2 element and store it in a variable named "fullName",





const displayLinks = (weeks) => {
    weeks.forEach((householdMembers) => {
        // Create elements to add to the div.cards element

        let card = document.createElement('section');

        let familyName = document.createElement('h2'); // fill in the blank
        let links = document.createElement('p'); // fill in the blank
        let birthdate = document.createElement('p'); // fill in the blank
        let birthplace = document.createElement('p'); // fill in the blank
        let first = document.createElement('p'); // fill in the blank


        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        first.textContent = `${weeks[0].links[0].title}`; // fill in the blank
        // birthdate.textContent = `Date of Birth: ${prophet.birthdate}`; // fill in the blank
        // birthplace.textContent = `Place of Birth: ${prophet.birthplace}`; // fill in the blank
        // // Build the image portrait by setting all the relevant attributes
        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(first); //fill in the blank
        card.appendChild(familyName); //fill in the blank
        card.appendChild(birthdate); //fill in the blank
        card.appendChild(birthplace); //fill in the blank
        card.appendChild(portrait);

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

async function getLinksData() {
    const response = await fetch(url2);
    const data = await response.json();
    console.table(data.weeks); // temporary testing of data retreival
    displayLinks(data.weeks);
}



getLinksData();
