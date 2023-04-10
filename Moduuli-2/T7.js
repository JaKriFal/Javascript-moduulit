function funktio1() {
    let maxi = +prompt("Anna nopan sivujen lukumäärä.")
    if(!Number.isInteger(maxi)) {
        alert("Et antanut kokonaislukua, ohjelma lopettaa.")
        return
    }
    let list = document.getElementById("noppanumerot");
    while( list.firstChild ){
        list.removeChild( list.firstChild );
    }
    while(true) {
        let luku = noppa(maxi);
        if(luku === maxi) {
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

function noppa(arg) {
    return Math.floor(Math.random() * arg + 1);
}