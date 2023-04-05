function funktio1() {
    let alku =+prompt('Anna aloitusvuosi');
    let loppu =+prompt('Anna päätösvuosi');
    let list = document.getElementById("karkausvuodet");

    for (let i = alku; i<=loppu ; i++) {
        if(i%100 == 0) {
            if(i%400 == 0){

                let li = document.createElement("li");
                li.innerText = i.toString();
                list.appendChild(li);
            } else {
                continue;
            }
        } else if (i%4 == 0) {

            let li = document.createElement("li");
            li.innerText = i.toString();
            list.appendChild(li);
        } else {
            continue;
        }
    }
}