@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
body {
    font - size: 16px;
    font - family: Roboto, Arial, Helvetica, sans - serif;
}

header,
    main,
    footer {
    margin: 1rem;
    position: relative;
}

h1 {
    color: #000;
    border - bottom: 1px solid #eee;
    text - shadow: 0 0 15px #777;
    width: 60 %;
}

h2 {
    color: navy;
    margin: 0 0 1rem 0;
    border - bottom: 1px solid #bbb;
}

h3 {
    margin: 0;
}

h4 {
    color: #333;
    margin: 7px 0 5px 0;
}

p {
    margin: 0;
}

main {
    margin - left: 2rem;
}

.grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(320px, 1fr));
}

section {
    margin: 0.25rem;
    padding: 0.35rem;
    background - color: #eee;
    border: 1px solid #bbb;
    display: flex;
    flex - direction: column;
    align - items: center;
}
section > p {
    min - height: 60px;
}

img {
    width: auto;
    max - width: 325px;
    box - shadow: 0 0 30px #777;
    height: 200px;
    border: 1px solid #333;
}

li > img {
    width: auto;
    height: 30px;
}

footer {
    border - top: 1px solid #555;
    padding: 20px;
}

.caption {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    border: 1px solid #ccc;
    background - color: lightyellow;
    padding: 0.25rem;
    display: grid;
    align - items: center;
    grid - template - columns: 1rem 1fr;
}

.caption h6 {
    position: absolute;
    top: -2.3rem;
    left: -0.25rem;
}

.caption > div {
    width: 0.75rem;
    height: 0.75rem;
    border: 1px solid #bbb;
}

.caption > p {
    font - size: 0.75rem;
}

.most {
    background - color: #bed;
}

.fav {
    background - color: skyblue;
}

.own {
    background - color: rosybrown;
}

.un {
    list - style: none;
}