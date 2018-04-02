// document.querySelector('.clear-tasks').addEventListener('click', function (event) {
//     console.log('Hello Button');
//     event.preventDefault();
// }); 

// document.querySelector('.clear-tasks').addEventListener('click', clearTasksClicked); 

// function clearTasksClicked(event) {
//     let val;

//     val = event.target.classList;
//     event.target.innerText = 'You Clicked Me!';

//     console.log(val);
//     event.preventDefault();
// }

// const card = document.querySelector('.card-action');
// const title = document.querySelector('#task-title'); 

// card.addEventListener('mousemove', flyHeader);

// function flyHeader(event) {
//     title.style.position = 'absolute';
//     title.style.zIndex = 999999;
//     title.style.left = event.clientX + 'px';
//     title.style.top = event.clientY + 'px';
//     //console.log(`x = ${event.clientX}, y = ${event.clientY}`);
// }


const form = document.querySelector('form');
const taskInout = document.querySelector('#task');

form.addEventListener('submit', doSubmit);

function doSubmit(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(taskInout.value);
    e.preventDefault();
}