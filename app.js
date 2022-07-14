const nav = document.querySelector('.nav-toggle')
const toggle = document.querySelector('.links')

nav.addEventListener('click', function () {
  toggle.classList.toggle('show-links')
})
