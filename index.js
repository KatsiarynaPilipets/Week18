const tasks = document.getElementById('tasks');
const submit = document.getElementById('submit');
const tasksList = document.getElementById('tasksList');
const clear = document.getElementById('clear');

const taskData = localStorage.getItem('taskData');
let task = [];

    if (taskData) {
        tasks = JSON.parse(taskData);
        renderTaskList();
        checkEmptyList();
    }

    function renderTaskList() {
        tasksList.innerHTML = '';
        
        task.forEach((task, index) => {
        const taskItem = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
        task[index].completed = checkbox.checked;
        saveTaskData();
        renderTaskList();
        });

        const text = document.createElement('span');
        text.textContent = task.text;
            if (task.completed) {
            text.classList.add('completed-task');
        }

        taskItem.appendChild(checkbox);
        taskItem.appendChild(text);
        tasksList.appendChild(taskItem);
        });
    }

    function saveTaskData() {
        localStorage.setItem('taskData', JSON.stringify(task));
    }

    function checkEmptyList() {
        if (task.length === 0) {
        taskList.innerHTML = '<p class="empty">Задач нет</p>';
        clear.disabled = true;
        } else {
        clear.disabled = false;
        }
    }

    submit.addEventListener('click', () => {
        const taskText = tasks.value;
        if (taskText) {
            task.push({ text: taskText, completed: false });
            saveTaskData();
            renderTaskList();
            tasks.value = '';
            checkEmptyList();
        }
    });

    clear.addEventListener('click', () => {
        task = [];
        saveTaskData();
        renderTaskList();
        checkEmptyList();
    });
