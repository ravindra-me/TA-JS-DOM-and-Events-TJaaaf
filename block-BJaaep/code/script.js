
let wrapper1 =  document.querySelector('.wrapper1');
let boxes = wrapper1.children[1].children 
let arrBoxes = Array.from(boxes);
let wrapper2 =  document.querySelector('.wrapper2'); 

arrBoxes.forEach(element => {
    element.addEventListener('click', ()=>{
        let number = Math.floor(Math.random()*12)
        element.innerHTML = number;
    })
})



function getNumber(event){
    let div = event.target;
    if(div.classList == "box"){
    let number =  Math.floor(Math.random() *12);
    div.innerHTML = number;
    }
}
wrapper2.addEventListener('click' , (event)=> {return  getNumber(event)} )
