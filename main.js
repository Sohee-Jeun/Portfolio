'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height; 
document.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`); 
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

/*//Handle scrolling when tapping on the navbar menu
//handle click on "contact me" button on home
const navbarMenu = document.querySelector('.navbar__menu');
const contactbtn = document.querySelector('.home__contact');
navbarMenu, contactbtn.addEventListener('click', (event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});*/

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
   scrollIntoView(link);
});

const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', ()=>{
  
   scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

//Make home slowly fade to transparent as the windows scrolls down
const scrollHome = document.querySelector('.home__container');
const homeheight = scrollHome.getBoundingClientRect().height; 
document.addEventListener('scroll',()=>{
    scrollHome.style.opacity = (1-window.scrollY/homeheight);
});