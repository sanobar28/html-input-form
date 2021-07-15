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

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})