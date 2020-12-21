let inputText = document.querySelector(".input-text");
let intialValue = 0
inputText.innerText = intialValue;
let main = document.querySelector('.main');
main.addEventListener('click', (event) =>{
    if(event.target.classList.value === "number" || event.target.classList.value === "btn"){
        if(inputText.innerText == intialValue){
            inputText.innerText = event.target.innerText
        }else{
            inputText.innerText += event.target.innerText;
        }
       
   }else if(event.target.classList.contains("plus")){
       let result  = eval(inputText.innerText)
       inputText.innerText = result  
   }else if(event.target.classList.contains("clear")){
       inputText.innerText = ""
       inputText.innerText = "0"
   }
})
