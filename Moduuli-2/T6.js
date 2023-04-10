function funktio1() {
    let list = document.getElementById("noppanumerot");
    while( list.firstChild ){
        list.removeChild( list.firstChild );
    }
    while(true) {
        let luku = noppa();
        if(luku === 6) {
            let li = document.createElement("li");
            li.innerText = luku.toString();
            list.appendChild(li);
            console.log(luku)
            break
        } else {
            let li = document.createElement("li");
            li.innerText = luku.toString();
            list.appendChild(li);
            console.log(luku)
        }
    }

}

function noppa() {
    return Math.floor(Math.random() * 6 + 1);
}
