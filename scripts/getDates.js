let text = "Last modified: " + document.lastModified;
document.getElementById("lastModified2").innerHTML = text;

let yearnow = document.write(new Date().getFullYear() + "\u00A9 Rune Larsen, Oregon, USA");
document.getElementById("thisyear").innerHTML = yearnow;