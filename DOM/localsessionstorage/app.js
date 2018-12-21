// local & session storage
 // window object has got local storage API
// local storage persists until u manually clear it out using settings/program/console
// session storage  gets removed once the browsers closed
 // set key value pairs
 // what u set as a value has to be a string
 // u can store arrays objects etc but turned into string using Json.stringify and if u want to use them u have to convert them back  using json.parse

 // step1 set local storage item
// navigation-->console/application/storage
// localStorage.setItem('name','John');

// // session storage
// // sessionStorage.setItem('name','Jane');
//
// // remove from localStorage
// // localStorage.removeItem('name');
//
// // retrieve from localStorage
// const name =localStorage.getItem('name');
// console.log(name);
// localStorage.setItem('age','30');
// const age =localStorage.getItem('age');
// console.log(age);
//
// // clear  al items in local localStorage
// localStorage.clear();


// adding task to localStorage
// document.querySelector('form').addEventListener('submit',
// function(e){
// const task = document.getElementById('task').value;
// localStorage.setItem('task',task);
// alert('Task Saved');
// e.preventDefault();
// });
 // problem here is if we add another task it replaces the previous task
 // so we can add 1 task only at a time
 // to solve this we create an array of tasks and store them as string
// we want to pull out of local storage watevers in dere and add to it
// if its empty set task to an empty array and add to it
 document.querySelector('form').addEventListener('submit',
 function(e){
 const task = document.getElementById('task').value;

 let tasks;

 if (localStorage.getItem('tasks')===null){
   tasks=[];
 }else{
   // tasks=localStorage.getItem('tasks');

   // this tasks is going to be  a string we need to parse it to JSON object that we can use.in this case we are storing one value so its not going to be an object but usuallu we store an array of JSON object
   tasks=JSON.parse(localStorage.getItem('tasks'));
   // next step is to push the task  coming from the form to this array
 }
 tasks.push(task);//this wont  change anything in local storage
 // we need to reset local storage task with this added value
 // localStorage.setItem('task',task);//we change it window
 localStorage.setItem('tasks',JSON.stringify(tasks));
 alert('Task Saved');
 e.preventDefault();
 });


const tasks=JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})
