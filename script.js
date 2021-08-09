const burgerMenu = document.querySelector('#burgerMenu')
const burgerBtn = document.querySelector('#burgerBtn')


burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('open')
})