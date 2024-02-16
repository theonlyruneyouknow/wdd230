const list = document.querySelector('#list');
// const list = document.querySelector('ul');

// const input = document.querySelector('input');
const input = document.querySelector('#favchap');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const li = document.createElement('li');
    // const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');
    // const listBtn = document.createElement('button');

    // listItem.appendChild(listText);
    li.append(listText);
    listText.textContent = myItem;
    li.append(deleteButton);
    // listItem.appendChild(listBtn);
    deleteButton.textContent = '❌';
    // listBtn.textContent = '❌';
    // list.appendChild(listItem);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        // listBtn.addEventListener('click', () => {
        list.removeChild(li);
        // list.removeChild(listItem);
    });

    input.focus();
});