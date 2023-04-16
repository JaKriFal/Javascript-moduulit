
u = document.getElementById('target')
const html = '<li>First item</li>\n' +
        '<li>Second item</li>\n' +
        '<li>Third item</li>'

u.innerHTML = html
u.classList.toggle('my-list')