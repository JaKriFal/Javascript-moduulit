function funktio1() {
    const ehd = +prompt('Anna ehdokkaiden lukumäärä.')
    let table = []

    for (let i = 0; i < ehd; i++) {
        let namestr = prompt("Anna ehdokkaan " + (i + 1).toString() + ". nimi.")
        table.push({canname: namestr, votes: 0,})
    }


    const votenbr = +prompt("Anna äänestäjien lukumäärä.")


    for (let i = 0; i < votenbr; i++) {
        let votestr = prompt("Äänestäjä n." + (i + 1).toString() + ", anna ehdokkaasi nimi.")
        for (let j = 0; j < table.length; j++) {
            if (table[j].canname === votestr) {
                table[j].votes++
            }

        }
    }


    table.sort((a, b) => {
        return b.votes - a.votes;
    });

    if(table[0].votes === table[1].votes) {
        console.log("Tasapeli, uudet vaalit!")
    } else {
        console.log("Voiton vei " + table[0].canname + " " + table[0].votes + " äänellä." )
        console.log("Tulokset:")
        for (let i = 0; i < votenbr; i++) {
            console.log(table[i].canname + ": " + table[i].votes + " ääntä." ) //toimii mut heittää tohon cannameen liittyne jotain ihme erroria
        }
    }



}