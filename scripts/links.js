const baseURL = "https://theonlyruneyouknow.github.io/wdd230/";
const linksURL = "https://theonlyruneyouknow.github.io/wdd230/data/links.json";
const linkCard = document.querySelector('#urlList');

async function getLinks() {

    try {
        const response = await fetch(linksURL);

        if (response.ok) {
            const data = await response.json();
            console.table(data.weeks) //for testing
            // console.log(data.weeks)
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week, index) => {
        //elements to add to the ul - each week line or outer array
        let li = document.createElement('li');
        let weekTitle = document.createElement('span');
        console.log(weekTitle)

        //build li content
        weekTitle.textContent = `${week.week}: `;

        li.appendChild(weekTitle);

        //elements to add to the li - each links inside the week line or inner array
        week.links.forEach((link, index) => {

            let weeklyAssignments = document.createElement('span');

            let a = document.createElement('a');

            //create a link element
            if (link.isInternal == true) {
                a.setAttribute('href', `${baseURL}${link.url} `);
                a.setAttribute('target', '_blank');
                bar.setAttribute('class', 'bar');
                a.textContent = `${link.title} `;
            } else {
                a.setAttribute('href', `${link.url} `); //codepen links
                a.setAttribute('target', '_blank');
                a.textContent = `${link.title} `;
            }

            li.appendChild(a);

            //add a separator if it's not the last link
            if (index < week.links.length - 1) {
                let bar = document.createElement('text');
                bar.textContent = `  | `;
                bar.setAttribute('class', 'bar');

                li.appendChild(bar);

            }

        })


        linkCard.appendChild(li);
        linkCard.setAttribute('class', 'bar');

    });
}
