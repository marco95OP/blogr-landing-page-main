"use strict";

const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("nav-link");
const nav = document.getElementsByTagName("nav");
/*this is for sublists*/
let navLink = document.querySelectorAll('ul.nav-link');
navLink.forEach((eachLink)=>{
    eachLink.addEventListener('click',(event)=>{
        (!eachLink.classList.contains('active'))? eachLink.classList.add('active'):eachLink.classList.remove('active'); 
    });
});

/*this function can close and open the hamburger*/ 
hamburgerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
});

navLinks.forEach(function (nav){
    nav.addEventListener("click", function(){
        console.log(this);
    });
});