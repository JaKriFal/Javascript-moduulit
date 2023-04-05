function funktio1() {
    let printout = "";
    let onko = window.confirm('Lasketaanko neliöjuuri?');
    if (onko) {
        let luku=+prompt('Anna positiivinen luku.');
        if(luku >= 0) {
            printout = 'Luvun neliöjuuri on ' + Math.sqrt(luku).toString();
        } else if(luku < 0) {
            printout ='Negatiivisen luvun neliöjuuri ei ole määritelty.';
        } else {
            printout ='Lukua ei tunnistettu.';
        }
    } else {
        printout ='Neliöjuurta ei lasketa.';
    }
    document.querySelector('#target').innerHTML = printout;
}