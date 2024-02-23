const url = 'data/members.json';
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
        let CompanyName = document.createElement('h2'); // fill in the blank
        let Webpage = document.createElement('p'); // fill in the blank
        let Adress = document.createElement('p'); // fill in the blank
        let Phone = document.createElement('p'); // fill in the blank
        let logo = document.createElement('img');
        let url = document.createElement('a');
        let li = document.createElement('li');
        // let url = document.createElement('a');

        // Build the h2 content out to show the Member's full name
        CompanyName.textContent = `${Member.CompanyName} `; // fill in the blank
        Webpage.textContent = `Webpage: ${Member.Webpage}`; // fill in the blank
        Adress.textContent = `Adress: ${Member.Adress}`; // fill in the blank
        Phone.textContent = `Phone: ${Member.Phone}`; // fill in the blank
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', Member.logo);
        logo.setAttribute('alt', `logo of ${Member.CompanyName} `); // fill in the blank
        logo.setAttribute('alt', `logo of ${Member.CompanyName} `); // fill in the blank
        url.setAttribute('href', `https://${Member.Webpage}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        // logo.setAttribute('height', '440');
        url.innerHTML = Member.Webpage;
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(CompanyName);
        card.appendChild(url); //fill in the blank
        // card.appendChild(Webpage); //fill in the blank
        card.appendChild(Adress); //fill in the blank
        card.appendChild(Phone); //fill in the blank

        cards2.appendChild(card);

        // list1.appendChild
    }); // end of arrow function and forEach loop
}


function buildtable(Member) {
    var table = document.getElementById('myTable')
    for (var i = 0; i < Member.length; i++) {
        var row = `<tr>
    <td>${Member[i].Category}</td>
    <td>${Member[i].CompanyName}</td>
    <td>${Member[i].Adress}</td>
    </tr>`
        table.innerHTML += row
    }
}


// const displaymembers = (members) => {
//     members.forEach((Member) => {
// Create elements to add to the div.cards element

// let card = document.createElement('section');
// let CompanyName = document.createElement('h2'); // fill in the blank
// let Webpage = document.createElement('p'); // fill in the blank
// let Adress = document.createElement('p'); // fill in the blank
// let Phone = document.createElement('p'); // fill in the blank
// let logo = document.createElement('img');
// let url = document.createElement('a');
// let li = document.createElement('li');
// let url = document.createElement('a');

// Build the h2 content out to show the Member's full name
// CompanyName.textContent = `${Member.CompanyName} `; // fill in the blank
// Webpage.textContent = `Webpage: ${Member.Webpage}`; // fill in the blank
// Adress.textContent = `Adress: ${Member.Adress}`; // fill in the blank
// Phone.textContent = `Phone: ${Member.Phone}`; // fill in the blank
// Build the image logo by setting all the relevant attributes

//     }); // end of arrow function and forEach loop
// }
// }
//Layout View
//use membersCards instead of display

// const listBtn = document.querySelector('#listBtn');
// const gridBtn = document.querySelector('#gridBtn');


// gridBtn.addEventListener("click", () => {
//     ;
//     membersCard.classList.remove("list-view");
// });

// listBtn.addEventListener("click", showList);

// function showList() {
//     membersCard.classList.add("list-view");;
// }
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
    console.table(data.members);
    // temporary testing of data retreival

    displaymembers(data.members);
    buildtable(data.members);
}



getMemberData();
