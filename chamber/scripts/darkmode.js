const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🐸")) {
        main.style.background = "#02240f";
        main.style.color = "#fff";
        document.getElementById('myTable').hidden = true
        document.getElementById('cards2').hidden = false
        modeButton.textContent = "🔆";
        document.getElementById('myTable').hidden = false
        document.getElementById('cards2').hidden = true
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🐸";
        document.getElementById('myTable').hidden = true
        document.getElementById('cards2').hidden = false
    }
});
