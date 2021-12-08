const form = document.getElementById("form");
const username = document.getElementById("username");
const emailaddress = document.getElementById("emailaddress");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//check required fields

function checkRequired(inputArr){
    inputArr.forEach(function(input){
if(input.value.trim()===''){

    showError(input,`${getFieldName(input)} is required`);
}else{
    showSuccess(input);
}
    });
}
//check length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} character and maximum ${max}`)
       }else{
        showSuccess(input);
    }
};
//check if email address is correct
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if(re.test(input.value.trim())){
    showSuccess(input);
 }else{
    showError(input,`Email is not valid`)
 }
}
//checkpassword typed are same
function checkpassword(input1,input2){

    if(input1.value===input2.value){
        showSuccess(input1,input2)
    }else{
        showError(input2,'password do not match')
    }
}
//getFieldName
function getFieldName(input){
return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//Event Listener 
form.addEventListener("submit", function (e) {
   e.preventDefault();

   
    checkRequired([username,emailaddress,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,20);
    checkEmail(emailaddress);   
    checkpassword(password,password2);

    const usernamesave=username.value;
    const emailaddresssave=emailaddress.value;
    const passwordsave="XXXXXXX";

    console.log(usernamesave,emailaddresssave,passwordsave);
    document.getElementById("usernamesave").innerText=`User Name:  ${usernamesave}`;
    document.getElementById("mailadrresssave").innerText=`Email address:  ${emailaddresssave}`;
    document.getElementById("passwordsave").innerText=`Password:  ${passwordsave}`;
    document.querySelector("form").style.display="none";
    document.getElementById("resultheading").style.display="inline-block";
    
    /*  if (username.value == "") {
        showError(username, "username is required");
    } else {
        showSuccess(username);
    }

    if (emailaddress.value == "") {
        showError(emailaddress, "email is required");
    } else if (!isValidemail(emailaddress.value)) {
        showError(emailaddress, 'email is not valid')
    } else {
        showSuccess(emailaddress);
    }

    if (password.value == "") {
        showError(password, "password is required");
    } else {
        showSuccess(password);
    }

    if (password2.value == "") {
        showError(password2, "password is required");
    } else {
        showSuccess(password2);
    }*/

});
//show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success message

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
   
}



