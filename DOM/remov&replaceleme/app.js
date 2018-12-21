// replace element
// step1 create element

// const newHeading=document.createElement('h2');
//
// // add id to new element
// newHeading.id='task-title';
//
// // create / add a new text node to create the elemnt
// newHeading.appendChild(document.createTextNode('Task List'));
//
//
// // get the heading u want to replace
// const oldHeading=document.getElementById('task-title');
//
// // we want to use replace-child method so we need the parent
// const cardAction=document.querySelector('.card-action');
//
// // replace
// cardAction.replaceChild(newHeading, oldHeading);



// REMOVE element
// colect all list items

// const lis=document.querySelectorAll('li');
// // collect the list itself
// const list =document.querySelector('ul');
//
// // remove list items
// lis[0].remove();
//
// // remove child
// list.removeChild(lis[2]);

// CLASSES & ATTRIBUTES
const firstLi=document.querySelector('li:first-child');;
// we want the link that is child of first li
const link=firstLi.children[0];

let val;
// grab the link's classname
val=link.className;
// get a tokenlist
val=link.classList;
// can be accessed individually
val=link.classList[0];
// can also add & remove class

link.classList.add('Test');
link.classList.remove('Test');
val=link;

// ATTRIBUTES
val =link.getAttribute('href');
val =link.setAttribute('href','http://google.com');
// can test if it has attr returns boolean
val=link.hasAttribute("href");
val=link.hasAttribute("title");
link.setAttribute('title','google');
val=link.hasAttribute("title");

val=link;

link.removeAttribute('title');
console.log(val);
