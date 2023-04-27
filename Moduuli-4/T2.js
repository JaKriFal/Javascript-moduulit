const form = document.getElementById('source')
const p = document.querySelector('#target')

let arg = form.querySelector('input[id = "query"]')



form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    TVQuery(arg.value)


})

async function TVQuery(query) {
    console.log("starting download")
    try {
        const response = await fetch('http://127.0.0.1:3000/airport/00A');    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);

    } catch {
    console.log("an error has occurred")
    }

}