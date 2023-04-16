const calc = document.getElementById('calculation')
const button = document.getElementById('start')
const res = document.getElementById('result')

function operate() {
    if(calc.value.includes('+')) {
        let input = calc.value.split('+')
        let x = +input[0]
        let y = +input[1]
        return x+y
    }   else if(calc.value.includes('-')) {
        let input = calc.value.split('-')
        let x = +input[0]
        let y = +input[1]
        return x-y
    }   else if(calc.value.includes('*')) {
        let input = calc.value.split('*')
        let x = +input[0]
        let y = +input[1]
        return x*y    }
    else if(calc.value.includes('/')) {
        let input = calc.value.split('/')
        let x = +input[0]
        let y = +input[1]
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