const passwd = document.querySelector("#password");
const passwd2 = document.querySelector("#password2");
const errormsg = document.querySelector("msgWarning");

/* compare passwords */
function checkPassWd() {
    if (passwd.value !== passwd2.value) {
        errormsg.textContent = "Password mis-match!!";
        /* errormsg.computedStyleMap */
    }
    else {

    }
}
