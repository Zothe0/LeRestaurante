function ibg(){
    console.log("hello")
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
       
    }
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const body = document.querySelector('body')

burger.onclick = event=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('locked')
}
ibg()