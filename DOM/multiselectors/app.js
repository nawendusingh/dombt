// multiple selectors return collection or node List
// getElementsByClassName

// const items=document.getElementsByClassName('collection-item');
// console.log(items);
// can be accessed liek array
// console.log(items[0]);
// items[0].style.color='red';
// items[3].textContent='Hello';
 // we can attach it to specific elements rathar than globally(document)
//  const  listItems=document.querySelector('ul').getElementsByClassName('collection-item');
//
// console.log(listItems);


// getElementsByTagName pretty much same
// // using let coz we are redeclaring lis later
// let lis=document.getElementsByTagName('li');
// console.log(lis);
// can be accessed like array
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[3].textContent='Hello';
// Collections dont support arraymethods
// convert to array

// lis=Array.from(lis);
// lis.reverse();
//
// lis.forEach(function(li,index){
//   console.log(li.classname);
//   li.textContent=`${index}:Hello`;//reversed
// });
//
//
// console.log(lis);


// querySelectorAll--> it returns nodes list


// nodelist allow some array methods,forEach
// An HTMLCollection should contain only elements, has a namedItem method, and allows item indexing by number or name.
// A NodeList can contain elements along with other types of nodes (such as text blocks), and the items can only be indexed by number.
// Nodes: in the DOM, everything is a node and every node is an object. The name node is used as a generic term, for everything.
//
// Element: is one specific type of node. It can be a list item, a div, the body, the window, whatever, but its a specific type.

// An element is a specific type of node, one that can be directly specified in the HTML with an HTML tag and can have properties like an id or a class. can have children, etc... There are other types of nodes such as comment nodes, text nodes, etc... with different characteristics. Each node has a property .nodeType which reports what type of node it is.

// const items=document.querySelectorAll('ul.collection li.collection-item');
// // noneed to convert to array
// items.forEach(function(item,index){
//    item.textContent=`${index}:Hello`;
//  });
// console.log(items);

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
    li.style.background='#ccc';
    });
// for loop will work with collection too even w/o converting to an array
for(let i=0;i<liEven.length;i++){
  liEven[i].style.background='#f4f4f4';
}
