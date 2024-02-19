const apiEndPoint =
  "https://theonlyruneyouknow.github.io/wdd230/data/links.json";
const display = document.querySelector("#display-data");

const getData = async () => {
  const res = await fetch(apiEndPoint);
  const data = await res.json();
  console.log(data);
  return data;
};

const displayUsers = async () => {
  const payload = await getData();

  let dataDisplay = payload.map((object) => {
      const { url, title } = object.weekss;

      return `
  <div class="container">
  <p>Name: ${url}</p>
  <p>Username: ${title}</p>
  </div>  
  `;
    })
    .join("");

  display.innerHTML = dataDisplay;
};
displayUsers();
