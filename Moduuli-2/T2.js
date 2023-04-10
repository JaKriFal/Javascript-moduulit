function funktio1() {
    let maara = +prompt('Anna osallistujien määrä.')
    let osallistujat = []
    let list = document.getElementById("osallistujalista");
    while( list.firstChild ){
        list.removeChild( list.firstChild );
    }
    for(i=0;i<maara;i++){
        osallistujat[i] = prompt('Anna osallistujan nimi.')
    }

    osallistujat.sort()

    for(i=0;i<maara;i++){
        let li = document.createElement("li");
        li.innerText = osallistujat[i];
        list.appendChild(li);
    }

}