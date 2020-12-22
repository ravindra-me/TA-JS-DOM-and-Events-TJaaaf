let form  = document.querySelector('form');
let main = document.querySelector('.main');
let modelLay = document.querySelector('.over-lay');

{/* <div class="container">
        <a href="#" class="click">Click</a>
        <div>
          <h2>Hello Sameer</h2>
          <p>Email: <span>isameer@gamil.com</span></p>
          <p>You Love: <span>Movies</span></p>
          <p>color: <span>#ffffff</span></p>
          <p>Rating: <span>8</span></p>
          <p>Book Genre: Fiction <span>#fffff</span></p>
          <p>You agree to Terms and Condition</p>
        </div>
      </div> */}
let obj = {};

function createContainer(obj) {
  modelLay.innerHTML = ""
    let div = document.createElement('div');
    div.classList.add("container");
    let a = document.createElement('a');
    a.setAttribute("href" ,"#")
    a.classList.add("click")
    a.innerText = `Click`
    let div2 = document.createElement('div');
    let h2 = document.createElement("h2")
    h2.innerText = `${obj.name}`
    let emailP = document.createElement('p')
    emailP.innerText = `Email: ${obj.email}`
    let moviesP = document.createElement("p");
    moviesP.innerText = `Yor Lov: ${obj.gender}`;
    let colorP = document.createElement("p");
    colorP.innerText = `color: ${obj.color}`
    let ratingP = document.createElement("p");
    ratingP.innerText = `Rating: ${obj.rating}`
    let bookGenreP = document.createElement("p")
    bookGenreP.innerText = `${obj.fiction} ${obj.color}`
    let agreeA = document.createElement("a");
    agreeA.innerText = `${obj.terms === true ? 'You agree to Terms and Condition' : 'You do not agree to terms and condition '}`
    div2.append(h2,emailP,moviesP,colorP,ratingP,bookGenreP,agreeA)
    div.append(a,div2)
    modelLay.append(div);
}



function heandelerFunction(event){
    event.preventDefault()
    let name = form.text.value;
    let email = form.email.value;
    let gender = form.gender.value;
    let color = form.color.value;
    let rating = form.range.value;
    let fiction  = form.drone.value;
    let check = form.terms.checked;
    console.log(check)
    obj.name  = name;
    obj.email = email;
    obj.gender = gender;
    obj.color = color;
    obj.rating = rating;
    obj.fiction = fiction;
    obj.terms = check;
    obj["data-id"] = new Date();
    createContainer(obj);
    
    modelLay.classList.remove("close");
    let btn = document.querySelector(".click");
    btn.addEventListener("click" , ()=>{
    modelLay.classList.add("close");
})
}


form.addEventListener('submit' ,heandelerFunction)
