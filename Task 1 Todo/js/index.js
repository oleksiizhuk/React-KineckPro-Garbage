window.onload = function () {

    const input = document.querySelector('#input');
    const selectAllButton = document.getElementById('selectAllButton');
    const addItem = document.getElementById('addItem');
    const feedBack = document.querySelector('.feedBack');
    const ul = document.getElementById('list');
    const newItemTextInput = document.getElementById('input');


    let todoList = [];
    if (localStorage.getItem('todo') !== null) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        for (let key in todoList) {
            createTodoItem(todoList[key]);
        }
    }

    function findAndRemoveItem(item, key) {
        let newArray = todoList.filter((obj, index) => obj.todoValue !== item || index !== key);
        if (newArray.length === todoList.length) {
            return false;
        }
        localStorage.setItem('todo', JSON.stringify(newArray));
        return true;
    }

    function handleItem(textValue) {
        const items = document.querySelectorAll('.todo-item');

        items.forEach(function (item, key) {
            console.log(item);
            if (item.querySelector('span.item-name').textContent === textValue) {
                item.querySelector('.done-item').addEventListener('click', function (e) {
                    e.stopPropagation();
                    item.querySelector('.item-name').classList.toggle('completed');
                    item.querySelector('.item-name').classList.contains('completed') ? todoList[key].check = true : todoList[key].check = false;
                    localStorage.setItem('todo', JSON.stringify(todoList));
                });

                item.addEventListener('dblclick', function (e) {
                    e.stopPropagation();
                    const thisElem = e.target;
                    if (thisElem.tagName !== 'LI') {
                        return;
                    }
                    input.value = textValue;
                    ul.removeChild(item);
                });

                item.querySelector('.remove-item').addEventListener('click', function (e) {
                    e.stopPropagation();
                    if (findAndRemoveItem(item.querySelector('span.item-name').textContent, key)) {
                        ul.removeChild(item);
                    }

                });
            }

        });

    }


    addItem.addEventListener('click', () => {
        const inputValue = newItemTextInput.value.trim();
        if (!inputValue && inputValue.length < 200) {
            console.error("error length from 1 to 200");
            showFeedBack("error length from 1 to 200", "danger");
            return;
        }
        newItemTextInput.value = '';
        let temp = {};
        temp.todoValue = inputValue;
        temp.check = false;
        todoList.push(temp);
        createTodoItem(temp);
    });

    selectAllButton.addEventListener('click', () => {
        console.log('select all button');
    });

    function createTodoItem(arg) {
        const item = document.createElement('li');
        const buttonDone = document.createElement('button');
        const buttonRemove = document.createElement('button');
        const span = document.createElement('span');

        buttonDone.className = 'btn btn-outline-primary float-right done-item';
        buttonDone.innerText = 'Done';
        buttonRemove.className = 'btn btn-outline-danger float-right remove-item';
        buttonRemove.innerText = 'Remove';

        arg.check ? span.className = 'item-name completed' : span.className = 'item-name';
        span.innerText = arg.todoValue;
        item.className = 'list-group-item todo-item';

        item.append(span);
        item.append(buttonDone);
        item.append(buttonRemove);

        ul.appendChild(item);

        handleItem(arg.todoValue);

        localStorage.setItem('todo', JSON.stringify(todoList));
    }

    function showFeedBack(text, action) {
        console.log(feedBack);
        feedBack.classList.add('showItem', `alert-${action}`);
        feedBack.innerText = text;

        setTimeout(function () {
            feedBack.classList.remove('showItem', `alert-${action}`);
        }, 3000);
    }

};
