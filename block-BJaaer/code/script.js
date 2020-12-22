let form  = document.querySelector('form');
let main = document.querySelector('.main')
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

let arr = [];
let obj = {};

function createContainer(name , email, gender , color, rating,fiction, check) {
    let div = document.createElement('div');
    div.classList.add("container");
    let a = document.createElement('a');
    a.classList.add("click")
    a.innerText = `Click`
    let div2 = document.createElement('div');
    let h2 = document.createElement("h2")
    h2.innerText = `${name}`
    let emailP = document.createElement('p')
    emailP.innerText = `Email: ${email}`
    let moviesP = document.createElement("p");
    moviesP.innerText = `Yor Lov: ${gender}`;
    let colorP = document.createElement("p");
    colorP.innerText = `color: ${color}`
    let ratingP = document.createElement("p");
    ratingP.innerText = `Rating: ${rating}`
    let bookGenreP = document.createElement("p")
    bookGenreP.innerText = `${fiction} ${color}`
    let agreeA = document.createElement("a");
    agreeA.innerText = `You agree to Terms and Condition`
    div2.append(emailP,moviesP,colorP,ratingP,bookGenreP,agreeA)
    div.append(a,div2)
    main.append(div);
}



function heandelerFunction(event){
    event.preventDefault()
    let name = form.text.value;
    let email = form.email.value;
    let gender = form.gender.value;
    let color = form.color.value;
    let rating = form.range.value;
    let fiction  = form.drone.value;
    let check = form.terms;
    console.log(check)
    obj.name  = name;
    obj.email = email;
    obj.gender = gender;
    obj.color = color;
    obj.rating = rating;
    obj.fiction = fiction;
    obj["data-id"] = new Date();
    arr.push(obj);
    createContainer(name, email, gender, color, rating, fiction, check);
}


form.addEventListener('submit' ,heandelerFunction)