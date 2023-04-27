const form = document.getElementById('source')
const p = document.querySelector('#target')

let arg = form.querySelector('input[id = "query"]')



form.addEventListener('submit', async function(evt) {
    evt.preventDefault()
    console.log("starting download")
    try {
        const url = `https://api.tvmaze.com/search/shows?q=${arg.value}`
        const response = await fetch(url);// starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData)
        const testdiv = document.getElementById('results')
        testdiv.innerHTML = ""

        for(let j = 0; j <jsonData.length; j++) {

            let showitem = document.createElement('article')
            let showname = document.createElement('h2')
            let t = document.createTextNode(jsonData[j].show.name)
            let showsum = document.createElement('div')
            showsum.innerHTML = jsonData[j].show.summary
            let showimg = document.createElement('img')

            showimg.src = jsonData[j].show.image ? jsonData[j].show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found"
            showimg.alt = jsonData[j].show.name
            let showlink = document.createElement('a')
            showlink.href = jsonData[j].show.url
            showlink.target = "_blank"
            showlink.innerHTML = jsonData[j].show.url


            showname.appendChild(t)

            showitem.appendChild(showname)
            showitem.appendChild(showlink)
            showitem.appendChild(showsum)
            showitem.appendChild(showimg)
            testdiv.appendChild(showitem)
        }


    } catch {
        console.log("error")
    }




})