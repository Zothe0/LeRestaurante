const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const body = document.querySelector('body')

burger.onclick = event=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('locked')
}