let cardContainer = document.querySelector(".box-container");
const cardsArray = [
  {
    name: 'shell',
    img: '../img/blueshell.png',
  },
  {
    name: 'star',
    img: '../img/star.png',
  },
  {
    name: 'bobomb',
    img: '../img/bobomb.png',
  },
  {
    name: 'mario',
    img: '../img/mario.png',
  },
  {
    name: 'luigi',
    img: '../img/luigi.png',
  },
  {
    name: 'peach',
    img: '../img/peach.png',
  },
  {
    name: 'up',
    img: '../img/1up.png',
  },
  {
    name: 'mushroom',
    img: '../img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: '../img/thwomp.png',
  },
  {
    name: 'bulletbill',
    img: '../img/bulletbill.png',
  },
  {
    name: 'coin',
    img: '../img/coin.png',
  },
  {
    name: 'goomba',
    img: '../img/goomba.png',
  },
]


// cardsArray.forEach(element => {
//     let li = document.createElement("li");
//     li.classList.add("card" , "flex" , "align-center" , "justify-center" , "text-center");
//     li.style.backgroundImage = `url(${element.img})`
//     cardContainer.append(li);

// })
let reset = document.querySelector(".reset");


let cardDuplicate = cardsArray.concat(cardsArray);
let move = document.querySelector(".move");


cardDuplicate.sort(() => 0.5 - Math.random()).forEach((element, index) => {
  let li = document.createElement("li");
  li.classList.add("card", "flex", "align-center", "justify-center", "text-center", "hide");
  li.setAttribute("id", element.name + index)
  li.style.backgroundImage = `url(${element.img})`
  cardContainer.append(li);
})

let count = 0;
let iconArr = [];
let matchedIcon = [];
let minute = 0;
let second = 0;
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");


function countChance() {
  count = count + 1;
  move.innerText = count;
}

function countTime(){
  setInterval(function (){
    if(second === 60) {
      minute = minute +1 ;
      minutes.innerText = minute;
    }else if(second > 60){
      second = 0;
      seconds.innerText = `${second}`
    }
    else if(second < 60){
      second = second + 1;
      seconds.innerHTML = `${second}`;
    }
  }, 1000);
  
}
// function countTime() {
//   if(second === 60) {
//     minute = minute +1 ;
//     minutes.innerText = minute;
//   }else if(second < 60){
//     second = second + 1;
//     second.innerText = second;
//     console.log(second)
//   }else if(second > 60){
//     second = 0;
//     seconds.innerText = second
//   }
// }


function matchIcon(iconArr) {  
  const firstIconId = iconArr[0];
  const secondIconId = iconArr[1];

  countChance ();
  const firstId = firstIconId.replace(/\d/g,'');
  const secondId = secondIconId.replace(/\d/g, '');

  console.log({firstId, secondIconId})
  if (firstId === secondId) {
    matchedIcon.push(iconArr[0])
    matchedIcon.push(iconArr[1])
    console.log({matchedIcon});
  } else 
   {
    let icon1 = document.getElementById(firstIconId)
    let icon2 = document.getElementById(secondIconId)

    setTimeout(() => {
      icon1.classList.add("hide")
      icon2.classList.add("hide")
    }, 200)


  }
  // console.log(iconArr)
}

// setInterval(function (){
//   if(second === 60) {
//     minute = minute +1 ;
//     minutes.innerText = minute;
//   }else if(second > 60){
//     second = 0;
//     seconds.innerText = `${second}`
//   }
//   else if(second < 60){
//     second = second + 1;
//     seconds.innerHTML = `${second}`;
//   }
// }, 1000);

let start = true

cardContainer.addEventListener("click", (event) => {
  let clickedIcon = event.target;
  const iconId = event.target.id;

  if(start){
    start = false;
    countTime()
  }
  
  if(matchedIcon.length < cardDuplicate.length) {
    if (clickedIcon.classList.contains("card")) {
      if (!matchedIcon.includes(iconId)) {
        console.log(iconId);
        iconArr.push(iconId);
        clickedIcon.classList.remove("hide");


        if (iconArr.length === 2) {
          matchIcon(iconArr);
          iconArr = []
        }
      }
  }
}
else{
  console.log("are you win")
}
})
reset.addEventListener("click", ()=>{
  window.location.reload()
})
