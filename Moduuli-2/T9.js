function even(taulukko) {
    let parit = [];
    for(i=0;i<taulukko.length;i++){
        if(taulukko[i]%2 === 0) {
            parit.push(taulukko[i]);
        }
    }
    return parit;
}

function funktio1() {
    let taulu = [1,2,3,4,12];
    console.log(taulu)
    console.log(even(taulu))

}