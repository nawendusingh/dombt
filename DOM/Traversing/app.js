// TRAVERSING THE DOM

let val;
const list=document.querySelector('ul.collection');
const listItems=document.querySelector('li.collection-item:first-child');

val=listItems;
val=list;

// child nodes of UL return nodes
// line breaks also show as nodes
// val =list.childNodes;
// val =list.childNodes[0];
// val =list.childNodes[0].nodeName;
// // this will return a number
// val =list.childNodes[0].nodeType;
// 1-element
// 2-attribute (deprecated)
// 3-text node
// 8-comment
// 9-document itself
// 10-doctype

// to get only HTML elements;programmer use children more than child nodes
val =list.children;
val =list.children[0];
val =list.children[0].textContent='Hello';

// children of children
// link in the list item;items can be added to it
list.children[3].children[0].id='test-link';
val=list.children[3].children[0];

val=list.firstChild;
// remove text nodes
val=list.firstElementChild;

val=list.lastChild;
val=list.lastElementChild;
// count child elements
val=list.childElementCount;

// get parent nodes
val=listItems.parentNode;
// in case of parents both node and elements work same in most cases
val=listItems.parentElement;
val=listItems.parentElement.parentElement;



// sibling

// this returns text node
val=listItems.nextSibling;
val=listItems.nextElementSibling.nextElementSibling;

// val=listItems.perviousSibling;
// val=listItems.perviousElementSibling;

console.log(val);
