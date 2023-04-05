function funktio1() {
    let nimi;
    nimi=prompt('What is your name?')
    document.querySelector('#target').innerHTML = 'Hello, ' + nimi + '!';
}