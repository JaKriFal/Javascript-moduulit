function funktio1() {
    let yy;
    let kaa;
    let koo;
    let summa;
    let tulo;
    let ka;
    yy = +prompt('Anna kokonaisluku.');
    kaa = +prompt('Anna toinen kokonaisluku.');
    koo = +prompt('Anna kolmas kokonaisluku.');
    summa = yy + kaa + koo;
    tulo = yy * kaa * koo;
    ka = summa / 3;

    document.querySelector('#target').innerHTML = 'Kolmen kokonaisluvun summa on ' + summa + ', niiden tulo on ' + tulo + ' ja niiden keskiarvo on ' + ka + '.';
}