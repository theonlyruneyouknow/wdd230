const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🐸")) {
        main.style.background = "#02240f";
        main.style.color = "#fff";
        document.getElementById('myTable').hidden = true
        document.getElementById('gone').hidden = false
        modeButton.textContent = "🔆";
        document.getElementById('myTable').hidden = false
        document.getElementById('gone').hidden = true
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🐸";
        document.getElementById('myTable').hidden = true
        document.getElementById('gone').hidden = false
    }
});

function myFunction() {
    var x = document.getElementById("cards2");
    var Y = document.getElementById("myTable");
    if (x.style.display === "none") {
        x.style.display = "block";
        Y.style.display = "block";
    } else {
        x.style.display = "none";
        Y.style.display = "none";
    }
  }