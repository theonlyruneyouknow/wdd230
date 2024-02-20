
const linksURL = "//data/links.json";

export function getData() {
    let list = document.getElementById('list');
    let img = document.getElementById('pic');
    let header = document.querySelector('header');

    fetch()
        .then((Response) => {
            if (!Response.ok) throw new Error('invalid');
            return Response.json();
        })
        .then(dataArray => {
            list.innerHTML = dataArray.map((item) => {
                return `<ul id="list">
    <p>first_name</p>
    <p>last_name</p>
</ul>`;
            }).join('');
        })
        .catch(console.warn);

}




// async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.log(data);
// }

// getLinks();

