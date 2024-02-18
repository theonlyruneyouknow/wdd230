const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🐸")) {
        main.style.background = "#02240f";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🐸";
    }
});
