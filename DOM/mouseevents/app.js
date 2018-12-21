// Mouse Events
// create variable to point to  selectors
const clearBtn=document.querySelector('.clear-tasks');
// everything within te border has a class of card
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

// // mOUSEclick
// clearBtn.addEventListener('click',runEvent);
//
// // doubleclick
// clearBtn.addEventListener('dblclick',runEvent);

// mousedown
// clearBtn.addEventListener('mousedown',runEvent);
// mouseup
// clearBtn.addEventListener('mouseup',runEvent);
// mouseenter
// card.addEventListener('mouseenter',runEvent);
// // // mouseleave
// card.addEventListener('mouseleave',runEvent);
// // mouseover
// card.addEventListener('mouseover',runEvent);
// // mouseout
// card.addEventListener('mouseout',runEvent);
// **mouseleave and mouse enter fires on initial parent element

// event handler
// function runEvent(e){
//   console.log(`Event Type : ${e.type}`)//grab from event object the type
// }

// mousemove(used in games mostly where u r moving ur character with mouse)
// lets make the heading display the coordinates(offset x y )
card.addEventListener('mousemove',runEvent);


// event handler
function runEvent(e){
  console.log(`Event Type : ${e.type}`);//grab from event object the type
  heading.textContent=`MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},0)`
}
