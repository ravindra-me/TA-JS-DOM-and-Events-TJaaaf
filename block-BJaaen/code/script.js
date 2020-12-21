let player = document.querySelector(".player-logo-box");
let nameValePlayer = document.querySelector('.show-name-player');
let nameValueComputer = document.querySelector(".show-name-computer");
let showMessage = document.querySelector('.show-result');
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let intialValue = 0;
playerScore.innerText = intialValue;
computerScore.innerText = intialValue
let allLogo = document.querySelectorAll("i")
let computerPlayers = ["Rock", "Paper", "Scissor"]

function checkWin(event) {
    let computerPlayer = computerPlayers[Math.floor(Math.random()* (computerPlayers.length))]
    let playerValue = event.target.dataset.text 
     console.log(computerPlayer)
     console.log(playerValue)
     nameValePlayer.innerText = playerValue;
     nameValueComputer.innerText = computerPlayer;
     if(playerValue==computerPlayer){
         showMessage.innerText = "It's a tie."
         allLogo.forEach(e=> e.style.color = "#008891")
     }else if(computerPlayer==="Paper" && playerValue==="Rock"){
         let score = Number(computerScore.innerText)+1;
         computerScore.innerText = score;
         showMessage.innerText = "You lost!"
         allLogo.forEach(e => e.style.color = "red");
     }else if(computerPlayer==="Rock" && playerValue==="Paper"){
        let score = Number(playerScore.innerText)+1;
        playerScore.innerText = score;
        showMessage.innerText = "You win!"
        allLogo.forEach(e => e.style.color = "green");
    }else if(computerPlayer==="Rock" && playerValue==="Scissor"){
        let score = Number(computerScore.innerText)+1;
        computerScore.innerText = score;
        showMessage.innerText = "You lost!"
        allLogo.forEach(e => e.style.color = "red");
    }else if(computerPlayer==="Scissor" && playerValue==="Rock"){
        let score = Number(playerScore.innerText)+1;
        playerScore.innerText = score;
        showMessage.innerText = "You win!"
        allLogo.forEach(e => e.style.color = "green");
    }else if(computerPlayer==="Scissor" && playerValue==="Paper"){
        let score = Number(computerScore.innerText)+1;
        computerScore.innerText = score;
        showMessage.innerText = "You lost!"
        allLogo.forEach(e => e.style.color = "red");
    }else if(computerPlayer==="Paper" && playerValue==="Scissor"){
        let score = Number(playerScore.innerText)+1;
        playerScore.innerText = score;
        showMessage.innerText = "You win"
        allLogo.forEach(e => e.style.color = "green");
    }
}
player.addEventListener("click" , checkWin)