
let wrapper2 =  document.querySelector('.second ');
let secondBoxes = document.querySelectorAll('.second li'); 
let boxes = document.querySelectorAll('.first li');

secondBoxes.forEach((element,index) => element.setAttribute("data-text" , index+1))

// first wrapper

boxes.forEach((box, index) => {
    box.addEventListener('click' , (event) =>{
        event.target.innerText = index + 1;
        setTimeout(()=>{
            event.target.innerText='';
        },5000)
    })
})

// second wrapper
function getNumber(event){
    let div = event.target; 
    if(div.classList == "box"){
        let number = div.dataset.text;
        div.innerText =number; 
       setTimeout(()=>{div.innerText =""},5000)
    }
}
wrapper2.addEventListener('click' , (event)=> {return  getNumber(event)} )


