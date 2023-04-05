function funktio1(){
    let nimi = prompt('Mikä on sinun nimesi?');


    switch (Math.floor((Math.random()*4))) {
        case 0:
            document.querySelector('#target').innerHTML = ' Onnea ' + nimi + ', olet Rohkelikko!';
            break;

        case 1:
            document.querySelector('#target').innerHTML = ' Onnea ' + nimi + ', olet Luihuinen!';
            break;
        case 2:
            document.querySelector('#target').innerHTML = ' Onnea ' + nimi + ', olet Puuskupuh!';
            break;
        case 3:
            document.querySelector('#target').innerHTML = ' Onnea ' + nimi + ', olet Korpinkynsi!';
            break;
    }

}