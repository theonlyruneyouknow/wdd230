
const jsonstr = "data/links.json";


const jsonstr2 = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';
const textstr = 'http://127.0.0.1:3000/';

export function getData() {
    let list = document.getElementById('list'); //the <ul>
    let img = document.getElementById('pic'); //the <img>
    let header = document.querySelector('header');

    fetch(jsonstr)
        .then((response) => {
            if (!response.ok) throw new Error('invalid');
            return response.json();
        })
        .then((dataArray) => {
            //
            list.innerHTML = dataArray
                .map(({ uid, first_name, last_name }) => {
                    return `<li class="listitem" data-uid="${uid}">
            <p>${first_name}</p>
            <p>${last_name}</p>
          </li>`;
                })
                .join('');
        })
        .catch(console.warn);
}