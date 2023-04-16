const op = document.getElementById('operation')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const button = document.getElementById('start')
const res = document.getElementById('result')

function operate() {
    let x = +num1.value
    let y = +num2.value
    if(op.value === 'add') {
        return x+y
    }   else if(op.value === 'sub') {
        return x-y
    }   else if(op.value === 'multi') {
        return x*y    }
        else if(op.value === 'div') {
        return x/y
    } else {
            return 'Error'
    }
}

function printresult() {
    while (res.hasChildNodes()) {
        res.removeChild(res.firstChild);
    }
    let ptext = document.createTextNode(operate().toString())
    res.appendChild(ptext)
}

button.addEventListener('click', printresult)

