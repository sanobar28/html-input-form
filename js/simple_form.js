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


//salary range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})