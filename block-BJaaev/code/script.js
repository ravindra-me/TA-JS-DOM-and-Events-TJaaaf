
let input =  document.querySelector('.input');
let todoList = document.querySelector('.todo-list');
let all = document.querySelector(".all")
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let numberItem = document.querySelector(".no-item");
let clearCompletly = document.querySelector(".clear");
let todoArr = JSON.parse(localStorage.getItem("todos")) || [];

function inputHandler(event) {
    let inputValue = event.target.value;
    console.log(inputValue);
    console.log(event.keyCode)
    if(event.keyCode===13 && inputValue.length >0 ){
        let dataObj = {
            text: inputValue,
            checked : false,
        }
        todoArr.push(dataObj)
        createTodo(todoArr);
        event.target.value = "";
    }
    localStorage.setItem("todos" , JSON.stringify(todoArr))
}

// todo delete by the click on btn
function deleteTodo(event) {
    let id = event.target.dataset.id;
    console.log(id)
    todoArr.splice(id, 1);
    createTodo(todoArr)
    numberItem.innerText = todoArr.length;
    localStorage.setItem("todos" , JSON.stringify(todoArr))
}

// create todo function
function createTodo(arr) {
    todoList.innerHTML = "";
    arr.forEach((element, index) => {
       let li = document.createElement('li');
       li.classList.add("list-element" , "flex" , "align-center" , "justify-between");
       let checkDiv = document.createElement('div');
       checkDiv.classList.add('check')
       let editInput = document.createElement('input')
       editInput.classList.add("edit-text", "display-none");
       let p = document.createElement("p");
       p.setAttribute("data-id" ,index);
       p.innerText = `${element.text}`
       p.classList.add("text")
       
       if(element.checked === true) {
           p.classList.add("line-through")
           checkDiv.classList.add("background-img");
       }

       let button = document.createElement('button');
       button.innerText = "❌"
       button.classList.add('delete-btn');
       button.setAttribute("data-id" , index)
       li.append(checkDiv, editInput, p, button)
       todoList.append(li);

    //    number of item 

       numberItem.innerText = todoArr.length;
       button.addEventListener("click" , deleteTodo)
      
    // text editing
       p.addEventListener("dblclick" , (event) =>{
           let testId = event.target.dataset.id;
           p.classList.add("display-none");
          editInput.classList.remove("display-none")
          editInput.addEventListener("keyup", (event) => {
            if(event.keyCode === 13){
                console.log(event.target.value)
                todoArr[testId].text =  event.target.value;
                createTodo(todoArr)
                localStorage.setItem("todos" , JSON.stringify(todoArr))
                p.classList.remove("display-none")
                editInput.classList.add("display-none");
            }
          })
       });

    //    check todo it completted or not
       checkDiv.addEventListener("click" , (event) => {
           element.checked = !element.checked;
           localStorage.setItem("todos" , JSON.stringify(todoArr))
           if(element.checked == true) {
               event.target.classList.add("background-img");
               p.classList.add("line-through");
               console.log(todoArr)
           }else{
            event.target.classList.remove("background-img");
            p.classList.remove("line-through");
           }
       })
    });
}

// check active number of todos

active.addEventListener("click" , (event) => {
    let activeTodo = todoArr.filter(element => element.checked === false);
    createTodo(activeTodo);
    numberItem.innerText = activeTodo.length;
})


// check 
completed.addEventListener("click" , (event) => {
    let completeTodo = todoArr.filter(element => element.checked === true);
    createTodo(completeTodo);
    numberItem.innerText =completeTodo.length;
})

all.addEventListener("click" , (event) => {
    createTodo(todoArr)
    numberItem.innerText = todoArr.length;
})

clearCompletly.addEventListener("click" , ()=>{
    todoArr = []
    createTodo(todoArr)
    localStorage.setItem("todos" , JSON.stringify(todoArr))
    numberItem.innerHTML = todoArr.length
})

createTodo(todoArr)

input.addEventListener('keyup' , inputHandler)
