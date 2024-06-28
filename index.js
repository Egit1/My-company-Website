
var modeToggle = document.querySelector("#mode-toggle");
const socialPop = document.querySelector('.social_handles span');
modeToggle.onclick = ()=> {
    document.querySelector('body').classList.toggle('dark-mode');
   
  modeToggle.classList.toggle('fa-sun')

}

socialPop.addEventListener('click', ()=> {
  document.querySelector('.social_handles_card').classList.toggle('open_card')
})

if(document.querySelector("#search") === "Demo") {
  window.open("https://fonts.google.com/")
}