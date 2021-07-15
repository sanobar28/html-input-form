/**
 * java script for validating user input
 * 
 */

//UC1 Validate Name
const text  = document.querySelector('#text');
const textError = document.querySelector('.text-error');
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
text.addEventListener('input', function() {
    
    if (text.value.length == 0) {
        textError.textContent = '';
    }
    if(nameRegex.test(text.value)){
        textError = '';
    }else{
        textError.textContent = "Name in incorrect";
    }
})

//UC2 email validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    }
    else {
        emailError.textContent = "Email is not Valid";
    }
});

//UC3-validate mobile number
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = RegExp('^[1-9]{2}[ ][0-9]{10}$');
    if (telRegex.test(tel.value)) {
        telError.textContent = "";
    }
    else {
        telError.textContent = "telephone number is not Valid";
    }
});

//UC4-Validating password min 8 characters

//UC5-Atleast one special char, atleast one digit and one uppercase letter
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let pwdRegex = RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[^0-9a-zA-Z])(?!.*[^0-9a-zA-Z].*[^0-9a-zA-Z]).{8,}$');
    if (pwdRegex.test(pwd.value)) {
        pwdError.textContent = "";
    }
    else {
        pwdError.textContent = "password is not Valid";
    }
});

//salary range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})