
  
function enable() {
    document.querySelector("#subscribe").disabled=false;
    document.querySelector("#subscribe").classList.remove("disabled");

}
function disable() {
    // document.querySelector("#subscribe").disabled=true;
    document.querySelector("#subscribe").classList.add("disabled");

}

disable();


document.querySelector(".formm").addEventListener("submit", function (event) {
event.preventDefault();

var emailInput = document.querySelector("#email");
var errorMessage=document.querySelector(".error");
var submittedMail=document.getElementById("submittedEmail");

errorMessage.innerText="";
document.querySelector(".mail").classList.remove("errorYes");



var email=emailInput.value.trim();
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "") {
    errorMessage.innerText = "Email cannot be empty";
    document.querySelector(".mail").classList.add("errorYes");
    return;
}
if (!emailPattern.test(email)) {
    errorMessage.innerText = "Valid email is required";
    document.querySelector(".mail").classList.add("errorYes");
    return;}

document.querySelector(".signup-form").classList.add("hidden");
document.querySelector(".signup-success").classList.remove("hidden");
submittedMail.innerText = email;

});

document.querySelector("#email").addEventListener("input", function(event){

event.preventDefault();

var emailInput = document.querySelector("#email");
var errorMessage=document.querySelector(".error");
// var submittedMail=document.getElementById("submittedEmail");

errorMessage.innerText="";

document.querySelector(".mail").classList.remove("errorYes");


var email=emailInput.value.trim();
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "") {
    errorMessage.innerText = "Email cannot be empty";
    disable();
    // document.querySelector(".mail").classList.add("errorYes");
    return;
}
if (!emailPattern.test(email)) {
    errorMessage.innerText = "Valid email is required";
    disable();
    // document.querySelector(".mail").classList.add("errorYes");
    return;}

enable();



});

document.querySelector(".dismiss").addEventListener("click",function(event){

    document.querySelector(".signup-form").classList.remove("hidden");
    document.querySelector(".signup-success").classList.add("hidden");
    document.querySelector("#email").value="";
    document.querySelector("#email").setAttribute('placeholder','email@company.com');

});



document.querySelector("#email").addEventListener("focus",function(event){
    document.querySelector("#email").removeAttribute('placeholder');
});