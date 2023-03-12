let isOpen = false
const iconMenu = document.querySelector('.icon_menu')
const navLinks = document.querySelector('.nav_links')
const body = document.querySelector('body')

iconMenu.addEventListener('click', () => {
  if (!isOpen) {
    iconMenu.src = "./assets/images/icon-menu-close.svg"
    isOpen = true
    body.style.overflow = "hidden"
  } else {
    iconMenu.src = "./assets/images/icon-menu.svg"
    isOpen = false
    body.style.overflow = "auto"
  }
  navLinks.classList.toggle('menu_bar_open')
})

