const pic = document.getElementById('target')
const trigger = document.getElementById('trigger')

function change() {
    pic.src = 'img/picB.jpg'
    trigger.removeEventListener('mouseenter', change)
    trigger.addEventListener('mouseleave', changeback)

}
function changeback() {
    pic.src = 'img/picA.jpg'
    trigger.removeEventListener('mouseleave', changeback)
    trigger.addEventListener('mouseenter', change)
}

trigger.addEventListener('mouseenter', change)