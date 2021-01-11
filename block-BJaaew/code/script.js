// let container = document.querySelector('.container');
// let input =  document.querySelector(".input");
// let houseName = document.querySelector(".peopleName"); 

// let people = got.houses.reduce((a,b) => {
//      b.people.map(elem => a.push(elem))
//      return a;
// }, [])

// function createUi(element) {
//     return `<article class="article flex-31">
//     <div class="flex align-center">
//       <img src=${element.image} alt="">
//       <h3>${element.name}</h3>
//     </div>
//     <p class="text">${element.description}</p>
//     <div class="width-100">
//       <a href="#" class="btn width-100">Learn More!</a>
//     </div>
//   </article>`
// }

// let cards = got.houses.map(element => 
//     element.people.map(elem => 
//     createUi(elem)
//     ).join("")
// ).join(""); 

// container.innerHTML = cards;


// function search(event) {
//     let inputValue  = event.target.value.toLowerCase();
//     let filterValue = people.filter(element => element.name.toLowerCase().includes(inputValue));
//     let filterCard = filterValue.map(elem => createUi(elem)).join("")
//     container.innerHTML = filterCard
// }

// input.addEventListener("keyup" , search)


// function searchHouse(event) {
//   let house = event.target.innerText.toLowerCase();
//   let filterHouse = got.houses.filter(element => element.name.toLowerCase() === house)
//   let filterHouseShow = filterHouse[0].people.map(element => createUi(element)).join("");
//   container.innerHTML = filterHouseShow;
// }

// houseName.addEventListener("click" , searchHouse)


let root  = document.querySelector(".container");
let peopleName = document.querySelector(".peopleName");
let activeHouse = "";
let input =  document.querySelector(".input");

let tags  =  got.houses.map(element => element.name)

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people)
  return acc;
},[])

function createUi(data=[]) {
  root.innerHTML = "";
  data.forEach((people) =>{
    let article = document.createElement("article");
    article.classList.add("article" , "flex-31");
    let div = document.createElement("div");
    div.classList.add("flex" , "align-center");
    let img = document.createElement("img");
    img.src = people.image;
    let h3 = document.createElement("h3");
    h3.innerText = people.name;
    let p = document.createElement("p");
    p.classList.add("text");
    p.innerText = people.description;
    let div2 = document.createElement("div");
    div2.classList.add("width-100")
    let a = document.createElement("a");
    a.classList.add("btn" , "width-100")
    a.innerText = "Learn More!"
    div.append(img, h3)
    div2.append(a);
    article.append(div,p,div2)
    root.append(article)
  })
}


function createTagUi(tags = []) {
  peopleName.innerHTML = "";
  tags.forEach(element => {
    let a = document.createElement("a");
    a.classList.add("btn")
    a.innerText = element;
    a.addEventListener("click" , () =>{
      activeHouse = element;
      let peopleOfTheHouse = got.houses.find((house) => house.name === element).people;
      createUi(peopleOfTheHouse);
      console.log(peopleOfTheHouse);
    })
    peopleName.append(a);
  })
}


function handleSearch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
  createUi(filteredPeople);
}

input.addEventListener("input" ,handleSearch)
createTagUi(tags);

createUi(allPeople);

console.log(allPeople)