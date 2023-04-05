function funktio1() {
    let maara =+prompt('Anna arpakuutioiden määrä.')
    let kohde =+prompt('Anna toivottu silmälukujen summa')
    let x = 0;
    for(i=0;i<10000;i++){
        let apu = 0;
        for(j=0; j<maara;j++){
            apu = apu + Math.floor((Math.random()*6 + 1));

        }
        if(apu == kohde){
            x++;
        }

    }

    let todnak = (x/10000)*100;

    document.querySelector('#target').innerHTML = 'Todennäköisyys saada ' + maara + ' nopalla silmälukujen summaksi ' + kohde + ' on ' + todnak +'%.'

}