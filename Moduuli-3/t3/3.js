'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.getElementById('target')

const html =    '<li></li> ' +
                '<li></li> ' +
                '<li></li>'

list.innerHTML = html

for(let i = 0; i < names.length; i++) {
    list.querySelectorAll('li')[i].innerHTML = names[i];

}
