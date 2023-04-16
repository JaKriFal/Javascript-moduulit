'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.querySelector('#target');

for(let i=0;i<students.length;i++) {
  let u = document.createElement('option')
  u.value = students[i].id
  let t = document.createTextNode(students[i].name)
  u.appendChild(t)
  select.appendChild(u)

}