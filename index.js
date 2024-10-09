let btn3 = document.querySelector('#btn3');
let dialog = document.querySelector('dialog');
let cancelBtn = document.querySelector('#btn5');
let btn4 = document.querySelector('#btn4');
let container = document.querySelector('.demo');
let task = document.querySelector('#name');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        target.classList.add('active');
    })
})
btn3.addEventListener('click', function() {
    dialog.showModal();
    document.querySelector('dialog').style.display = 'grid';
})

cancelBtn.addEventListener('click', function() {
    dialog.close();
    document.querySelector('dialog').style.display = 'none';
})
btn4.addEventListener('click', function(event) {
    let paragraph = document.createElement('div')
    let text = document.createElement('div')
    let mo = document.createElement('div')
    let button2 = document.createElement("button")
    let text2 = document.createElement("p")
    button2.innerHTML = "Remove";
    text.innerText = task.value;
    text.className = 'name';
    paragraph.className = 'paragraph';
    mo.className = 'button10';
    container.appendChild(paragraph);
    paragraph.appendChild(text);
    paragraph.appendChild(mo);
    mo.appendChild(button2);
    button2.addEventListener('click', function() {
        paragraph.remove();
    })
})
let btn = document.querySelector('i');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
})
