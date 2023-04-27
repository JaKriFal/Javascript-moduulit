

const form = document.getElementById('source')
const arg = form.querySelector('input[id = "query"]')
const divtarget = document.getElementById('target')


form.addEventListener('submit', async function(evt) {
    evt.preventDefault()
    console.log("starting download")
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${arg.value}`)
        const jsonData = await response.json();
        console.log(jsonData)
        divtarget.innerHTML = ""

        for(let j=0; j<jsonData.result.length;j++) {
            let t = document.createTextNode(jsonData.result[j].value)
            let a = document.createElement('article')
            let p = document.createElement('p')
            p.appendChild(t)
            a.appendChild(p)
            divtarget.appendChild(a)
        }


    } catch (error) {
        console.log(error.message);
    }

})



