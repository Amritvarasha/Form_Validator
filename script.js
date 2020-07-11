var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password= document.getElementById('password');
var password2 = document.getElementById('password2');
//show input error mesaage
function showError(input,message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message; 

}
// show success outline
function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}
// check email is valid
function isValidEmail(email){
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
    
}

// Event Listener 
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'UserName is Required');
    }
    else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email,'Email is Required');
    }
    else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }
    else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password,'Password is Required');
    }else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2,'Password 2 is Required');
    }else{
        showSuccess(password2);
    }
});