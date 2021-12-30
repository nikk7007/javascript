const box = document.querySelector('.box')
const cont = document.querySelector('.cont')

document.onmousemove = e => {
    if (e.ctrlKey == false){
        box.style.top = e.pageY + 'px'
        box.style.left = e.pageX + 'px'
    }
    document.onclick = () => {
        createBox(e.pageX, e.pageY)
    }
}

let i = 0
function createBox(x = e.x, y = e.y){
    cont.innerHTML += `<div class="box box${i}"></div>`
    let box = document.querySelector(`.box${i}`)
    box.style.left = x + 'px'
    box.style.top = y + 'px'
    i++
}



setTimeout(() => {
    document.querySelector('h1').style.zIndex = '-1'

}, 5000)
