const apiEndpoint = "https://theonlyruneyouknow.github.io/wdd230/data/links.json";
const display = document.querySelector("#display-data");

const getData = async () => {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  console.log(data);
  displayLinks();
  return data
};

const displayLinks = async () => {
  const payload = await getData();
  // const payload2 = JSON.parse(payload);
  let dataDisplay = payload.map((weeks) => {
    // console.log(weeks);
    // const { url, title } = object;

    //   return `
    // <div class="container">
    // <p>Name: ${url}</p>
    // <p>Username: ${title}</p>
    // </div>  
    // `;
  })
  // .join("");

  display.innerHTML = dataDisplay;
};
getData();
