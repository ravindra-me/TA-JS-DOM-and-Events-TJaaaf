
let first = document.querySelector('.first-box');
let second = document.querySelector('.second-box');
function colorGenerator1(){
    let colorCodes = 'abcdef123456789ABCDEF';
    let color=''
    for(let i=1 ; i<=6;i++){
        let colorCode = colorCodes[Math.floor(Math.random() * colorCodes.length)]
        color+=colorCode;
    }
    first.style.backgroundColor = `#${color}`
    console.log(color);
}
function colorGenerator2(){
    let colorCodes = 'abcdef123456789ABCDEF';
    let color=''
    for(let i=1 ; i<=6;i++){
        let colorCode = colorCodes[Math.floor(Math.random() * colorCodes.length)]
        color+=colorCode;
    }
    second.style.backgroundColor = `#${color}`
    console.log(color);
}
first.addEventListener('click' , colorGenerator1);
second.addEventListener('mousemove' , colorGenerator2);