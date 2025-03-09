document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const generateListButton = document.getElementById('generateListButton');
    const shoppingList = document.getElementById('shoppingList');
    const editListButton = document.getElementById('editListButton');
    const message = document.createElement('p');
    message.textContent = 'You have everything you need!';
    message.className = 'message';
    document.querySelector('.container').appendChild(message);

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${itemText} <i class="fas fa-trash-alt"></i>`;
            shoppingList.appendChild(listItem);
            itemInput.value = '';
            message.classList.remove('show');
        }
    });

    generateListButton.addEventListener('click', () => {
        if (shoppingList.children.length === 0) {
            alert('Your shopping list is empty!');
        } else {
            alert('Your shopping list is ready!');
            itemInput.style.display = 'none';
            addItemButton.style.display = 'none';
            generateListButton.style.display = 'none';
            editListButton.style.display = 'inline-block';
        }
    });

    editListButton.addEventListener('click', () => {
        itemInput.style.display = 'inline-block';
        addItemButton.style.display = 'inline-block';
        generateListButton.style.display = 'inline-block';
        editListButton.style.display = 'none';
    });

    shoppingList.addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            e.target.parentElement.remove();
            if (shoppingList.children.length === 0) {
                message.classList.add('show');
            }
        }
    });
}); 