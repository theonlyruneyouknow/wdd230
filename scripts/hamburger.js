
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');



// Add a click event listender to the hamburger button and use a 

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
