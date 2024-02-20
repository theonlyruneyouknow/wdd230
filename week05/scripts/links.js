
const baseURL = "https://theonlyruneyouknow.github.io/wdd230/";

const linksURL = "https://theonlyruneyouknow.github.io/wdd230/data/links.json";
let ulist = document.querySelector("#urlList");

async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data.weeks);
        displayLinks(data);
      }

      
      getLinks();

      const displayLinks = (weeks) => {
        weeks.forEach((week) => {
            let li = document.createElement('li');
            let weeknum = document.createElement('span');
            weeknum.textContent = `${week.week}`

     }   
     )
    
    }





// async function start() {
//     const URLlist = await fetch("data/links.json");
//     const data = await URLlist.json()
//     console.log(data)
//     title = createURLlist(data.weeks[0].links[0].title);
//     return title;
// }

// async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     displayLinks(data);
//   }

//   async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     displayLinks(data);
//   }

// start()


// function createURLlist(URLlist) {
//     document.getElementById("URLs").innerHTML = `
    
//      ${Object.keys(URLlist).map(function (URLs) {
//         return ${ data }).join()}
    
//     `
// }
// function createURLlist(URLlist) {
//     document.getElementById("URLs").innerHTML = `
//     <ol>
//     <li> ${Object.keys(URLlist).join()}</li>
//     </ol>
//     <select>

//     <option>Select rom the list of URLS</option>
//     ${Object.keys(URLlist).map(function (URLs) {
//         return `<option> ${URLs} </option>`
//     }).join("")}
// `
// }






// const jsonstr2 = 'https://random-data-api.com/api/v2/users?size=10';
// const imgstr = 'https://picsum.photos/id/237/300/200';
// const textstr = 'http://127.0.0.1:3000/';

// export function getData() {
//     let list = document.getElementById('list'); //the <ul>
//     let img = document.getElementById('pic'); //the <img>
//     let header = document.querySelector('header');

//     fetch(jsonstr)
//         .then((response) => {
//             if (!response.ok) throw new Error('invalid');
//             return response.json();
//         })
//         .then((dataArray) => {
//             //
//             list.innerHTML = dataArray
//                 .map(({ uid, first_name, last_name }) => {
//                     return `< li class="listitem" data - uid="${uid}" >
//             <p>${first_name}</p>
//             <p>${last_name}</p>
//           </li>`;
//                 })
//                 .join('');
//         })
//         .catch(console.warn);
// }