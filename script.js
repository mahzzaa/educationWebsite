document.addEventListener('DOMContentLoaded', () => {
let Nav = document.querySelector('nav');

window.addEventListener ( 'scroll', ()=>{
    Nav.classList.toggle('nav-bg' , window.scrollY>0);
});

});