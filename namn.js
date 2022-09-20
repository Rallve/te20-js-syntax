const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () => {
    const name = input.value;
    const ul = document.createElement('ul');
    const letters = [];
    for (let i = 0; i < name.length; i++) {
        letters[i] = name.charAt(i);
    }
    for (let i = name.length - 1; i > -1; i--) {
        const li = document.createElement('li');
        li.textContent = letters[i];
        ul.appendChild(li);
    }
    const li = document.createElement('li');
    messageBox.appendChild(ul);
});