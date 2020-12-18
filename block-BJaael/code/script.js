let container  = document.querySelector('.container');

for(i=1 ; i<=500; i++){
    let div = document.createElement('div');
    div.classList.add("box");
    div.style.width = "4rem"
    div.style.height = "4rem";
    container.append(div);
}

let boxs = document.querySelectorAll('.box');

boxs.forEach(e=> e.innerHTML = Math.floor(Math.random()*500))

function colorGenerator(){
    let color = '';
    let colorCodes = "abcdef123456789ABCDEF"
    for(let i=1 ; i<=6 ;i++){
        let codes = colorCodes[Math.floor(Math.random() * colorCodes.length)]
        color+=codes
    }
    console.log(color)
    return `#${color}`
}

function randomColorNumber(){
    let randomBox = boxs.forEach(e=>{
        let a =Math.floor(Math.random()*500)
        console.log(a);
        e.innerHTML = a;
        let randomColor = colorGenerator()
        e.style.backgroundColor = randomColor;
    })
    return randomBox
}

container.addEventListener('mousemove' , randomColorNumber)

