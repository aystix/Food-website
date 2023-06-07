let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let talkbtn = document.querySelector("#talk-btn");
let textarea = document.querySelector("#txt-area");
let sendbtn = document.querySelector("#send-btn");
let form = document.querySelector("#form");

menu.addEventListener("click", function(){
    
    navbar.classList.toggle('active');
})
window.onscroll = () => {
    navbar.classList.remove("active");
}

talkbtn.addEventListener("click", function(){
   textarea.style.display="block";
   sendbtn.style.display="block";
   talkbtn.style.display="none";
   form.style.display="block";
})
form.addEventListener("submit", function(){
    alert("your response has been received");
    location.reload();
    })
    