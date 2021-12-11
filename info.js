<Title>DenysMoroz</Title>

const form = document.getElementById('form');
const Fname = document.getElementById('Fname');
const Lname = document.getElementById('Lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conpassword = document.getElementById('conpassword');
const Uname = document.getElementById('Uname');
const age = document.getElementById("age");
const grad = document.getElementById("grad");
const enrolled = document.getElementById("enrolled");
const Ngrad = document.getElementById("Ngrad");
const pop_v = document.getElementById("pop_v");
const succ_val = document.getElementById("succ_val");


function showERR(input, message) {
    const formCont = input.parentElement;
    formCont.className = 'form-control error';
    const small = formCont.querySelector('small');
    small.innerText = message;
}


var show_array_of_success=[]
var count=0
function showSUCC(input) {
    const formCont = input.parentElement;
    formCont.className = 'form-control success';
    
    
}
console.log(count)


function checkEM(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSUCC(input)
    }else {
        showERR(input,'Email is not invalid');
    }
}



function checkReq(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showERR(input,`${getFieldN(input)} is required`)
        }else {
            showSUCC(input);
        }
    });
}



function checkLeng(input, min ,max) {
    if(input.value.length < min) {
        showERR(input, `${getFieldN(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showERR(input, `${getFieldN(input)} must be less than ${max} characters`);
    }else {
        showSUCC(input);
    }
}
function checkLengA(input, min ,max) {
    if(input.value > min) {
        showERR(input, `${getFieldN(input)} must be at ${min} and less ${max} `);
    }else if(input.value < max) {
        showERR(input, `${getFieldN(input)} must be at ${min} and less ${max} `);
    }else {
        showSUCC(input);
    }
}


function getFieldN(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkPwdMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showERR(input2, 'Passwords do not match');
    }
}



form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkReq([Fname, email, password, conpassword, Uname, age, grad, enrolled, Ngrad]);
    checkLeng(Fname,3,15);
    checkLeng(password,6,25);
    checkLeng(Lname,3,15);
    checkLeng(Uname,3,15);
    checkEM(email);
    checkLengA(age,18,60);
   
    checkPwdMatch(password, conpassword);
    if(password.value === conpassword.value && password.value !="" && conpassword.value !="" && age.value>=18 ){
        pop_v.style.display="block" 
    }

 
    
});


succ_val.addEventListener("click",{
    
})