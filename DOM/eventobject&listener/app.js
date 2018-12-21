// EVENT LISTENER EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log('Hello World');

  // to prevent default behavior we can add a parameter 'e' in our function
  // its called event object
  // e.preventDefault();
  // or
  // empty href makes link to the same page
  // a # in href stops link from making browser redirect
// });

// we can also add named function;MUCH NEATER AND ADVISED

// document.querySelector('.clear-tasks').addEventListener('click',onClick);
//
// function onClick(e){
//   console.log('cLICKED');
// }

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
let val;
val=e;
val=e.target;
val=e.target.id;
val=e.target.className;//returns string
val=e.target.classList;//returns tokenlist

e.target.innerText='Hello';

// event type
val=e.type;

// timestamp

val=e.timeStamp;

// coordiantes relative to window
// returns no of pixel from y-axis
val=e.clientY;
// returns no. of pixel from x-axis
val=e.clientX;

// coordinates relative to element itself
val=e.offsetY;
val=e.offsetX;


console.log(val);
}
 // this logged  all attributes of 'e'
 // most important is target-->represents the element where event occured
