// Toggle menu icons
const menu=document.querySelector(".menu");
const newContents = document.querySelector("#nav-contents");

menu.addEventListener("click", ()=>{
    newContents.classList.toggle("toggle");

});