let list = document.querySelector('.list');
let input = document.querySelector('.input');
let arr = [];


function inputHandeler(event){
    console.log(event.target.value)
    let inputText = event.target.value
    if(event.keyCode===13 && inputText.length >0){
        let detailList = {
            text : inputText,
            checked : false,
        }
        arr.push(detailList);
        event.target.value = "";
        createList(arr);
    }

}

function deleteTodo(event) {
    let id = event.target.dataset.id;
    arr.splice(id , 1);
    createList(arr);
}

function createList(arr) {
    list.innerHTML = "";
    arr.forEach((element ,index) => {
        let li = document.createElement('li')
        li.classList.add("flex", "justify-between")
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox"
        checkBox.name = "checkbox"
        checkBox.classList.add("checkbox")
        let p = document.createElement('p');
        p.classList.add("text")
        p.innerText = `${element.text}`;
        let a = document.createElement("a");
        a.classList.add("btn")
        let span  = document.createElement("span");
        span.setAttribute("data-id" ,index);
        span.classList.add("close");
        span.innerText = "❌"
        a.append(span)
        li.append(checkBox, p, a)
        list.append(li);
        span.addEventListener("click" , deleteTodo)
    });

}


input.addEventListener('keyup' , inputHandeler)