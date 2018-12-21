// DOM selectors->methods that allow to pull things from DOM and manipute elements/node
// use jquery only when quick simple plugins/scripts  for specific actions
// 2 types-->single element selectors-->grabs 1 element and stores one thing.so if there are multiple instances of a class it only grabs the first  instance

// Multiple element selectors-->get all elements and returns a HTML collection/node list


// **SINGLE ELEMENT SELECTORS  (2)
// getElementById(); cant select a class or tag not flexible

// console.log(document.getElementById('task-title'));
//
// // manipulating
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// change styling
// document.getElementById('task-title').style.background='#333';
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').style.padding='5px';
// disappear on click
// document.getElementById('task-title').style.display='none';
 // dont use for styling use for dynamic functionality like hover

 // change content
  // innerText is aware of CSS styling,So innerText will not include text that is hidden by CSS, but textContent will.
// document.getElementById('task-title').textContent='TASKS LIST';
// document.getElementById('task-title').innerText='MY TASKS';
// document.getElementById('task-title').innerHTML='<span style="color:red">Task List</span>';


// better to use a variable
 // const taskTitle=document.getElementById('task-title');
 //
 // taskTitle.style.background='#333';
 // taskTitle.style.color='#fff';
 // taskTitle.style.padding='5px';
 //
 // taskTitle.textContent='TASKS LIST';
 // taskTitle.innerText='MY TASKS';
 // taskTitle.innerHTML='<span style="color:red">Task List</span>';


// querySelector--newer,much more powerful select elements by anything and not only id.u can put any css selector in here

// console.log(document.querySelector('#task-title'));//id
// console.log(document.querySelector('.card-title'));//className
// console.log(document.querySelector('h5'));//more than 1 h5 will return first one


// target certain elements if more than 1
document.querySelector('li').style.color='red';
// can also do nested elements
document.querySelector('ul li').style.color='blue';
// using css pseudoclasses;last child nth child
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello World';


// every odd/even wont work coz its a single element selector
document.querySelector('li:nth-child(odd)').style.background=' #ccc';
