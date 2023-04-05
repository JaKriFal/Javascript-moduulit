function funktio1() {
    let vuosi =+prompt('Anna vuosiluku.');
    let printout = ""
    if(vuosi%100 == 0) {
        if(vuosi%400 == 0){
            printout = 'Vuosi on karkausvuosi.';
        } else {
            printout = 'Vuosi ei ole karkausvuosi';
        }
    } else if (vuosi%4 == 0) {
        printout = 'Vuosi on karkausvuosi';
    } else {
        printout = 'Vuosi ei ole karkausvuosi.';
    }
    document.querySelector('#target').innerHTML = printout;
}