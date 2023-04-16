const form = document.getElementById('source')
const p = document.querySelector('#target')

let fname = form.querySelector('input[name="firstname"]')
let lname = form.querySelector('input[name="lastname"]')


form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    p.innerHTML = "Your name is " + fname.value + " " + lname.value + "."


})

