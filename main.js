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
    navbarMenu.classList.remove('open');
   scrollIntoView(link);
});

const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', ()=>{
  
   scrollIntoView('#contact');
});

/*Navbar  toggle button for small screen*/

const toggleBtn = document.querySelector('.navbar__toggle_btn');
toggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});

//Make home slowly fade to transparent as the windows scrolls down
const scrollHome = document.querySelector('.home__container');
const homeheight = scrollHome.getBoundingClientRect().height; 
document.addEventListener('scroll',()=>{
    scrollHome.style.opacity = (1-window.scrollY/homeheight);
});

//Show "arrow up" button when scrolling down
const arrowUp =document.querySelector('.arrow__up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeheight / 2){
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});
//Handle click on the "arrow up" button
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects  = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
if(filter == null){
    return;
}

//Remove selection from the previous iten and select the new one
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
active.classList.add('selected');

const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
e.target.classList.add('selected');
active.classList.remove('selected');

projectContainer.classList.add('anim-out');
setTimeout(()=>{
projects.forEach((project) =>{
 console.log(project.dataset.type);
 if(filter ==='*' ||filter === project.dataset.type){
     project.classList.remove('invisible');
 } else{
    project.classList.add('invisible');
 }
});
    projectContainer.classList.remove('anim-out');
},300);

});
