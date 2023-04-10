function funktio1(){
    let luvut = []
    let i = 0;
    while(true){
        let luku = +prompt('Anna luku')
        if(luku === 0){
            break;
        } else {
            luvut[i] = luku;
            i++;
        }
    }
    luvut.sort((a,b) => b-a);

    let pituus = luvut.length;

    for(i=0;i<pituus;i++) {
        console.log(luvut[i]);
    }
}