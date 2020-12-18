
let first = document.querySelector('.first-box');
let second = document.querySelector('.second-box');

function coloGenerator(){
    let colorCodes = 'abcdef123456789';
    let color=''
    for(let i=1 ; i<=6;i++){
        let colorCode = colorCodes[Math.floor(Math.random() * colorCodes.length)]
        color+=colorCode;
    }
    return `#${color}`;
}


function colorGenerator1(){
    let randomColor = coloGenerator(); 
    first.style.backgroundColor = randomColor;
}


function colorGenerator2(){
    let randomColor = coloGenerator();
    second.style.backgroundColor = randomColor;
}
first.addEventListener('click' , colorGenerator1);
second.addEventListener('mousemove' , colorGenerator2);