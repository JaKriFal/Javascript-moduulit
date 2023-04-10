function funktio1() {
    let luvut = [];

    for(i=0;i<5;i++) {
        luvut[i] = +prompt('Anna luku')
    }
    for(i=4;i>=0;i--){
        console.log(luvut[i])
    }
}