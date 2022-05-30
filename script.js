"use strict";

const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("nav-link");
const div = document.querySelector("div");

hamburgerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
});

navLinks.forEach(function (nav){
    nav.addEventListener("click", function(){
        this.classList.toggle("open");

        if(div.style.display === 'none'){
            div.style.display = 'block';
          } else{
            div.style.display = 'none';
          }
        /* if (nav.classList.contains("open")){
            navLinks.forEach(function (nav){
                nav.classList.remove("open");
            });
            nav.classList.toggle("open");
        } */
    });
});
