function funktio1() {
    let luku=+prompt('Anna positiivinen kokonaisluku');
    let apu=luku-1;
    let printout = "";

    if(luku == 0 || luku == 1) {
        printout ='Ei alkuluku';
        document.querySelector('#target').innerHTML = printout;
        return
    }

    while(apu>1) {

        if(luku%apu == 0) {
            printout ='Ei alkuluku';
            document.querySelector('#target').innerHTML = printout;
            return;
        } else {
            apu--;
            continue;
        }
    }
    printout ='Alkuluku';
    document.querySelector('#target').innerHTML = printout;
}