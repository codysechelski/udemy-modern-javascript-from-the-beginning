//DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//WIRE UPEVENT LISTENERS
loadEventListenrs();

function loadEventListenrs(){
    form.addEventListener('submit',addTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task name');
    }
    
    //create li
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //create delete control
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></a>';

    //add the link to the li
    li.appendChild(link);

    //add li to collection
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();

    e.preventDefault();
}