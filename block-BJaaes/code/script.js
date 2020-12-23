let form = document.querySelector('.form');
let userNameErro = "";

function checkNumber(value) {
   let a = value.split('').some(e => Number(e));
   return a;
}

function handleSubmit(event) {
    event.preventDefault();
    let userName =  event.target.username;
    let name = event.target.name;
    let email = event.target.email;
    let number = event.target.number;
    let password = event.target.password;
    let confirmPassword = event.target.repassword;
    if(checkNumber(name.value)){
        userNameErro = "can't be enter number";
        name.nextElementSibling.innerText = userNameErro;
    }else{
        userNameErro = "";
        name.nextElementSibling.innerText = userNameErro;
    }if(userName.value.length <4){
        userNameErro = `${userName.value} can't be less than 4 characters`;
        userName.nextElementSibling.innerText = userNameErro;
    }else{
        userNameErro = "";
        userName.nextElementSibling.innerText = userNameErro;
    }if( email.value.length <6){
        userNameErro = "Not a valid email";
        email.nextElementSibling.innerText = userNameErro;
    }else{
        userNameErro = "";
        email.nextElementSibling.innerText = userNameErro;
    }if(number.value.length <7){
        userNameErro = "phone number can't be less than 7";
        number.nextElementSibling.innerText = userNameErro;
    }else{
        userNameErro = "";
        number.nextElementSibling.innerText = userNameErro;
    }if(password.value !== confirmPassword.value){
        userNameErro = "please enter vaild pasworld";
        confirmPassword.nextElementSibling.innerText = userNameErro;
    }
}

form.addEventListener('submit', handleSubmit)