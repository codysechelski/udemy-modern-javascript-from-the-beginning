//EVENT DELAGATION
const taskList = document.querySelector('ul.collection');

taskList.addEventListener('click', deleteItem);

function deleteItem(e) {
    //console.log(e.target);

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
} 