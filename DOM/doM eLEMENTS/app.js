// document is the property of window object
// we are examinig properties/attributes and not methods/selectors it offfers here
 let val;
// val=document;
// HTML Collection;node list;like arrays but dont support array methods
 // get a html Collection
// val=document.all;

// can be accessed like arrays
val=document.all[1];

val=document.all.length;

// ca access individual elements
val=document.head;
val=document.body;
val=document.doctype;
val=document.domain;
val=document.url;
val=document.characterSet;
val=document.contentType;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;

// links

val=document.links;
val=document.links[0];
val=document.links[0].className;
val=document.links[0].classList;
val=document.links[0].classList[0];

val=document.scripts;
val=document.scripts[2].getAttribute('src');



// this will give error
let scripts=document.scripts;

// turn collection to array
let scriptsArr=Array.from(scripts);


scriptsArr.forEach(function(script){
  console.log(script);
  console.log(script.getAttribute('src'));
});
 console.log(val);
