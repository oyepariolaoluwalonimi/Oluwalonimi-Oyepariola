function wed(){
    document.getElementById("nav-menu").style.bottom='0px'

}
function games(){
    document.getElementById("nav-menu").style.bottom='-250px'

}



// const navMenu=document.getElementById('nav-menu'),
// navToggle=document.getElementById('nav-toggle'),
// navClose=document.getElementById('nav-close');

// if(navToggle){
//     navToggle.addEventListener('click',()=>{
//         navMenu.classList.add(show-menu)
//     })
// }
// if(navClose){
//     navClose.addEventListener('click',()=>{
//     navMenu.classList.remove('show-menu')


// const tabs = document.querySelectorAll('[data-ctarget]'),
//         tabContents =document.querySelectorAll('[data-content]')

// tabs.forEach(tab =>{
//     tab.addEventListener('click', () =>{
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__active')

//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })
function education(){
    document.getElementById("education").style.display='block'
    document.getElementById("works").style.display='none'

}
function works(){
    document.getElementById("education").style.display='none'
    document.getElementById("works").style.display='block'
}

// =========================SERVICES

function services1(){
    document.getElementById('services1').style.display='none'
}
function readmore1(){
    document.getElementById('services1').style.display='flex'
}


function services2(){
    document.getElementById('services2').style.display='none'
}
function readmore2(){
    document.getElementById('services2').style.display='flex'
}


function services3(){
    document.getElementById('services3').style.display='none'
}
function readmore3(){
    document.getElementById('services3').style.display='flex'
}

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




var typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
});


function about(){
        document.getElementById ('readmore').style.display='block'
        document.getElementById('about_readmore').style.display='none'
        document.getElementById('about_readless').style.display='block'
        
    
}
function aboutless(){
    document.getElementById('readmore').style.display='none'
    document.getElementById('about_readmore').style.display='block'
    document.getElementById('about_readless').style.display='none'
}

AOS.init();
// dartk or light theme


function myFunction() {
    document.body.classList.toggle("dark-mode");

 }


//  read more 
