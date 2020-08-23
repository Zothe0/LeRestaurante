let position = 0
const track = document.querySelector('.slider-track')
const item = document.querySelector('.slider-item')
const btnNext = document.querySelector('.btn-next')
const itemQuantity = track.children.length
const itemWidth = item.clientWidth
const movePosition = itemWidth
const stopPoint = -(itemQuantity*itemWidth)

checkButtons()

btnNext.onclick = (event)=>{
    position -= movePosition
    setPosition()
    checkButtons()
}

function setPosition() {
    track.style.transform = `translateX(${position}px)`
}

function resetPosition(){
    position = 0
    setPosition()
}

function checkButtons() {
    if(position === stopPoint){
        resetPosition()
    }
    else if(position > stopPoint && btnNext.hasAttribute('disabled'))
        btnNext.removeAttribute('disabled')
}