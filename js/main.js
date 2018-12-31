const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line');
const links = document.querySelectorAll('.nav-links');
const nav = document.querySelector('.nav-list');

hamburger.addEventListener('click', function(){
    hamburgerLine[0].classList.toggle('hamburger-line-one-active');
    hamburgerLine[1].classList.toggle('hamburger-line-two-active');
    hamburgerLine[2].classList.toggle('hamburger-line-three-active');
    nav.classList.toggle('nav-list-active');
});

for(let el of links){
    el.addEventListener('click', function(){
        nav.classList.remove('nav-list-active');
    });
}

const date = new Date();
const year = date.getFullYear();
const footerYear = document.querySelector('.year');
footerYear.textContent = year;

for(const link of links){
    link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const target = document.querySelector(href);

    target.scrollIntoView({
        behavior : 'smooth',
        block : 'start'
        });
    });
    
}