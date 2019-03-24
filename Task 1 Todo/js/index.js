window.onload = function () {
    const input = document.querySelector('#input');
    const addItem = document.getElementById('addItem');
    const feedBack = document.querySelector('.feedBack');
    const sortDone = document.getElementById('doneAction');
    const sortResolved = document.getElementById('restoreAction');
    const ul = document.getElementById('list');
    const newItemTextInput = document.getElementById('input');
    const removeAction = document.getElementById('removeAction');

    let todoList = [];
    if (localStorage.getItem('todo') !== null) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        for (let key in todoList) {
            createTodoItem(todoList[key]);
        }
    }

    sortResolved.addEventListener('click', () => {
        todoList.sort(function (a, b) {
            return b.check - a.check
        });
        console.log(todoList);
        ul.innerHTML = "";
        localStorage.setItem('todo', JSON.stringify(todoList));
        for (let key in todoList) {
            createTodoItem(todoList[key]);
        }
    });

    sortDone.addEventListener('click', () => {
        todoList.sort(function (a, b) {
            return a.check - b.check
        });
        console.log(todoList);
        ul.innerHTML = "";
        localStorage.setItem('todo', JSON.stringify(todoList));
        for (let key in todoList) {
            createTodoItem(todoList[key]);
        }
    });

    /*function findAndRemoveItem(item) {
        console.log(key);
        let newArray = todoList.filter((obj, index) => obj.todoValue !== item || index !== key);
        console.log(newArray);
        if (newArray.length === todoList.length) {
            console.log("false");
            return false;
        }
        //todoList = newArray;
        localStorage.setItem('todo', JSON.stringify(todoList));
        return true;
    }*/

    function handleItem(item, args) {
        item.querySelector('.done-item').addEventListener('click', (e) => {
            //e.stopPropagation();
            item.querySelector('.item-name').classList.toggle('completed');
            args.check = !args.check;
            localStorage.setItem('todo', JSON.stringify(todoList));
        });

        item.addEventListener('dblclick', function db(event) {
            const thisElem = event.target;
            //this.removeEventListener('dblclick', arguments.callee, false);
            removeEvent('dblclick');
            if (thisElem.tagName !== 'LI') {
                return;
            }
            const tmpValueLi = thisElem.querySelector('span.item-name').textContent;
            const textArea = document.createElement('textarea');
            textArea.style.width = thisElem.clientWidth + 'px';
            textArea.style.height = thisElem.clientHeight + 'px';
            textArea.className = 'edit-area';
            textArea.value = tmpValueLi;

            textArea.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    removeEvent("focusout");
                    thisElem.querySelector('span.item-name').innerText = textArea.value.trim();
                    thisElem.querySelector('textarea.edit-area').remove();
                    const items = document.querySelectorAll("#list li .item-name");
                    todoList.map((obj, index) => {
                        if (obj.todoValue !== items[index].textContent) {
                            todoList[index].todoValue = items[index].textContent;
                        }
                    });
                    localStorage.setItem('todo', JSON.stringify(todoList));
                }

                if (event.key === "Escape") {
                    thisElem.querySelector('span.item-name').innerText = tmpValueLi;
                    thisElem.querySelector('textarea.edit-area').remove();
                }
            });

            textArea.addEventListener("blur", () => { //доделать
                console.log("focusout");
                /*thisElem.querySelector('span.item-name').innerText = tmpValueLi;
                // thisElem.querySelector('textarea.edit-area').remove();
                const items = document.querySelectorAll("#list li .item-name");
                todoList.map((obj, index) => {
                    if (obj.todoValue !== items[index].textContent) {
                        todoList[index].todoValue = items[index].textContent;
                    }
                });
                localStorage.setItem('todo', JSON.stringify(todoList));*/
            });

            thisElem.appendChild(textArea);
            textArea.focus();
        });

        item.querySelector('.remove-item').addEventListener('click', (e) => {
            e.preventDefault();
            item.remove();
            const items = document.querySelectorAll('.todo-item');
            todoList = Array.from(items).reduce((acc, item) => {
                let textContent = item.querySelector('span.item-name');
                acc.push({todoValue: textContent.textContent, check: textContent.classList.contains('completed')});
                return acc;
            }, []);
            console.log(todoList);
            localStorage.setItem('todo', JSON.stringify(todoList));
        });

        function removeEvent(listenEvents) {
            for (let i = 0; i < item.length; i++) {
                console.log(item[i]);
                item[i].removeEventListener(`${listenEvents}`, arguments.callee, false);
            }
        }
    }

    removeAction.addEventListener('click', function (event) {
        const items = document.querySelectorAll('.todo-item');
        console.log(items);
        console.log(todoList);
        const temp = todoList.filter(x => x.check !== true);
        todoList = temp;
        console.log(todoList);
        ul.innerHTML = "";
        for (let key in todoList) {
            createTodoItem(todoList[key]);
        }
        localStorage.setItem('todo', JSON.stringify(todoList));
    });

    //add on input listen keyup
    input.addEventListener("keyup", function (event) {
        console.log(event.key);
        if (event.key === "Enter") {
            getArgumentOutInput();
        }
        if (event.key === "Escape") {
            input.value = "";
        }

    });

    addItem.addEventListener('click', () => {
        getArgumentOutInput();
    });

    function getArgumentOutInput() {
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
    }


    function createTodoItem(arg) {
        console.log(arg);
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

        handleItem(item, arg);

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