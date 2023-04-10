function concat(taulukko) {
    let str = "";
    for(i=0;i<taulukko.length;i++) {
        str = str + taulukko[i];
    }
    return str;
}

function funktio1(){
    let table =["Viivi","Saara","Yrjö-Pekka"];
    console.log(table)
    console.log(concat(table));
    document.querySelector('#target').innerHTML = concat(table);


}
