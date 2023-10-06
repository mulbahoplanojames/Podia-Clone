const navLinks = document.querySelector('.main-link');
const showMenu = document.querySelector('.bi-list');
const hideMenu = document.querySelector('.bi-x-square');

showMenu.addEventListener("click", () => {
  navLinks.style.right = '0';
})

hideMenu.addEventListener("click", () => {
  navLinks.style.right = '-200px'
})