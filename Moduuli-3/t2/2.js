const list = document.getElementById('target')

const t1 = document.createTextNode('First item')
const t2 = document.createTextNode('Second item')
const t3 = document.createTextNode('Third item')

li1 = document.createElement('li')
li2 = document.createElement('li')
li3 = document.createElement('li')

li1.appendChild(t1)
li2.appendChild(t2)
li3.appendChild(t3)

list.appendChild(li1)
list.appendChild(li2)
list.appendChild(li3)

const second = list.querySelectorAll('li')[1];
second.classList.toggle('my-item')