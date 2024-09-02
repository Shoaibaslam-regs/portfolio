let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let sections=document.querySelector("section");
let navlinks=document.querySelector("header nav a");


window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');        
     
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const text = document.getElementById('text');
const speak = document.getElementById('speak');
 
 
 speak.addEventListener('click', ()=>{
    if(text.value.trim() === ""){
        alert("Enter text in message box before clicking")
    }
    else{

        let synthesis = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(`${text.value}`);
        synthesis.speak(voice);
        
    }
});
const submit  = document.getElementById('submit');
 submit.addEventListener('click', ()=>{
    alert("Only contact via whatsapp at this time");
 })
