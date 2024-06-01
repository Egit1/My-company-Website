const btn = document.getElementById('dark_light');
const body = document.querySelector('body');
const sun = document.querySelector('.fa-moon');
const menuBar = document.querySelector('.fa-bars');
const NavMenu = document.querySelector('.navbar ul')

btn.addEventListener('click', function () {
    body.classList.toggle('darkmode');
    sun.classList.toggle("fa-sun")
})

menuBar.addEventListener('click', ()=> {
    menuBar.classList.toggle('fa-times');
    NavMenu.classList.toggle('openMenu')
})