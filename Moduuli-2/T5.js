function funktio1(){
    let luvut = []
    let i = 0
    while(true){
        let luku = +prompt('Anna luku')
        if(luvut.includes(luku)){
            alert('Luku on jo annettu, ohjelma lopettaa nyt!')
            break;
        } else {
            luvut[i] = luku;
            i++;
        }
    }
    luvut.sort()
    console.log(luvut)

}