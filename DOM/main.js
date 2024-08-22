let todos = [];
let inProgress = [];
let completed = [];

function addTodo() {
    let todoText = document.getElementById('todoInput').value;
    if (todoText) {
        let todo = {
            id: Date.now(),
            text: todoText
        };
        
        todos.push(todo);
        displayTodos();
        document.getElementById('todoInput').value = '';
    } else {
        console.log('Please Enter a todo Item');
    }
}

function displayTodos() {
    let todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        let li = document.createElement('li');
        li.textContent = todo.text;
        
        // Start Task Button
        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start Task';
        startBtn.onclick = () => startTask(todo.id);

        // Update Button
        let updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.onclick = () => updateTodo(todo.id);

        // Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(todo.id, 'todo');

        li.appendChild(startBtn);
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

function startTask(id) {
    let todo = todos.find(todo => todo.id === id);
    todos = todos.filter(todo => todo.id !== id);
    inProgress.push(todo);
    displayTodos();
    displayInProgress();
}

function displayInProgress() {
    let inProgressList = document.getElementById('inProgressList');
    inProgressList.innerHTML = '';

    inProgress.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task.text;

        // Complete Task Button
        let completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete Task';
        completeBtn.onclick = () => completeTask(task.id);

        li.appendChild(completeBtn);

        inProgressList.appendChild(li);
    });
}

function completeTask(id) {
    let task = inProgress.find(task => task.id === id);
    inProgress = inProgress.filter(task => task.id !== id);
    completed.push(task);
    displayInProgress();
    displayCompleted();
}

function displayCompleted() {
    let completedList = document.getElementById('completedList');
    completedList.innerHTML = '';

    completed.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task.text;

        completedList.appendChild(li);
    });
}

function updateTodo(id) {
    let newTodoText = prompt('Update the todo:');
    if (newTodoText) {
        todos = todos.map(todo => todo.id === id ? { ...todo, text: newTodoText } : todo);
        displayTodos();
    }
}

function deleteTodo(id, section) {
    if (section === 'todo') {
        todos = todos.filter(todo => todo.id !== id);
        displayTodos();
    } else if (section === 'inProgress') {
        inProgress = inProgress.filter(task => task.id !== id);
        displayInProgress();
    }
}
