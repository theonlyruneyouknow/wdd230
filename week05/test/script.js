let timer
let deleteFirstPhotoDelay
const namelist2 = document.querySelector('#namelist2');

async function start() {
  try {
    // const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const response = await fetch("https://theonlyruneyouknow.github.io/wdd230/week05/new-ward-members.json")
    const data = await response.json()
    console.log(data)

    // createBreedList(data.message)
    // createBreedList(data.weeks[0].householdMembers[0])
    console.log(data.weeks[0].householdMembers)
    namelist = (data.weeks[0].householdMembers)
    // namelist2.getElementById("namelist2").innerHTML = 
    namelist.forEach(householdMembers => {
      // return ` hello`
      // let nana = document.getElementById("namelist2").innerHTML = `
      // ${householdMembers.name};`
      // 
      console.log(householdMembers.name);
      document.getElementById('html').innerHTML += '<p><a href="' + householdMembers.name + '">&raquo;Chapter ' + householdMembers.name + '</a></P>'
      // document.getElementById('html').innerHTML = html;

      // document.getElementById('nana').innerHTML += '<p><a href="' + householdMembers.name + '">&raquo;Chapter ' + householdMembers.name + '</a></P>'
      // document.getElementById('nana').innerHTML = nana;
    });
    // return (householdMembers.name);

    // let fullName = document.createElementbyid('new');
    // fullName.textContent = `${ householdMembers.name } `;
    // return myList;
    // return '<p>${</p >

    // const displayNames = (namelist) => {
    //   namelist.forEach((names) => {
    //     fullName.textContent = `${names.name} ${names.name}`;

    // });
  } catch (e) {
    console.log("There was a problem fetching the breed list.")

  }
}

start()

// function createBreedList(breedList) {
//   document.getElementById("breed").innerHTML = `
//     <select onchange="loadByBreed(this.value)">
//           <option>Choose a dog breed</option>
//           ${Object.keys(breedList).map(
//     function (breed) {
//       return `<option>${breed}</option>`
//     }).join('')}
//         </select>
//     `
// }

// namelist.forEach(householdMembers => {
//   // return ` hello`
//   document.getElementById("namelist2").innerHTML = `
//   ${householdMembers.name};`


// function createBreedList(namelist) {
//   document.getElementById("namelist2").innerHTML = `
//   <select onchange="loadByBreed(this.value)">
//         <option>Choose a dog breed</option>
//         ${householdMembers.keys(name).map(
//     function (breed) {
//       return `<option>${breed}</option>`
//     }).join('')}
//       </select>
// `
// }
// async function loadByBreed(breed) {
//   if (breed != "Choose a dog breed") {
// const response = await fetch(tilde-here https://dog.ceo/api/breed/dollarsignhere{breed}/images tilde-here)
//     const data = await response.json()
//     createSlideshow(data.message)
//   }
// }

// function createSlideshow(images) {
//   let currentPosition = 0
//   clearInterval(timer)
//   clearTimeout(deleteFirstPhotoDelay)

//   if (images.length > 1) {
//     document.getElementById("slideshow").innerHTML = `
//   <div class="slide" style="background-image: url('${images[0]}')"></div>
//   <div class="slide" style="background-image: url('${images[1]}')"></div>
//   `
//     currentPosition += 2
//     if (images.length == 2) currentPosition = 0
//     timer = setInterval(nextSlide, 3000)
//   } else {
//     document.getElementById("slideshow").innerHTML = `
//   <div class="slide" style="background-image: url('${images[0]}')"></div>
//   <div class="slide"></div>
//   `
//   }

//   function nextSlide() {
//     document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
//     deleteFirstPhotoDelay = setTimeout(function () {
//       document.querySelector(".slide").remove()
//     }, 1000)
//     if (currentPosition + 1 >= images.length) {
//       currentPosition = 0
//     } else {
//       currentPosition++
//     }
//   }
// }