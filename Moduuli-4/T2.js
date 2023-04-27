const form = document.getElementById('source')
const p = document.querySelector('#target')

let arg = form.querySelector('input[id = "query"]')



form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    TVQuery()


})

async function TVQuery() {
    console.log("starting download")
    try {
        const url = `https://api.tvmaze.com/search/shows?q=${arg.value}`
        const response = await fetch(url);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);

    } catch {
    console.log("an error has occurred")
    }

}