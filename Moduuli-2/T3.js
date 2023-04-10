function funktio1() {

    let koirat = []
    let list = document.getElementById("koirulit");
    while( list.firstChild ){
        list.removeChild( list.firstChild );
    }
    for(i=0;i<6;i++){
        koirat[i] = prompt('Anna koiran nimi.')
    }
    koirat.sort();
    koirat.reverse();
    for(i=0;i<6;i++){
        let li = document.createElement("li");
        li.innerText = koirat[i];
        list.appendChild(li);
    }

}