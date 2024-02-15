const input = document.queryselector('#favchap');
const button = document.queryselector('#button');
const list = document.queryselector('#list');

button.addEventListener('click',
    function () {

        // const deleteButton = 
        const li = document.createElement('li');
        document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        li.textContent = input.value;
        document.getElementById(favchap).innerHTML = sometext;
	)
}
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.focus();

input.value = '';






