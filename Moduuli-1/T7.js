function funktio1() {
    let lukumaara=+prompt('Anna heitettävien noppien lukumäärä');
    let summa = 0;
    let lukustring = "";
    for (let i = 0; i < lukumaara; i++) {
        let silmaluku = Math.floor((Math.random()*6 + 1));
        summa = summa + silmaluku;
        lukustring = lukustring + silmaluku.toString() + ", ";
    }

    document.querySelector('#target').innerHTML = 'Heitettiin ' + lukumaara + ' noppaa saaden silmäluvut '+ lukustring +'joiden summaksi tuli ' + summa +'.';
}