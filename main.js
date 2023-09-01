const menuBtn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const mobileMenu = document.getElementById('mobile-menu')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')

let isMenuOpen = false

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

function handleMenuBtnClick() {
  isMenuOpen = !isMenuOpen

  menuBtn.ariaExpanded = isMenuOpen
  toggleClass(overlay, 'overlay-hidden', !isMenuOpen)
  toggleClass(mobileMenu, 'menu-hidden', !isMenuOpen)
  toggleClass(iconHamburger, 'hidden', isMenuOpen)
  toggleClass(iconClose, 'hidden', !isMenuOpen)
}

menuBtn.addEventListener('click', handleMenuBtnClick)
