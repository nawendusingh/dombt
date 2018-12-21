// input and form events
// use id or class if more than 1 form get specific
const form=document.querySelector('form');
const taskInput=document.getElementById('task');

// variable to display the content being typed in line 27
const heading=document.querySelector('h5');

const select=document.querySelector('select');
 // take the input variable and set it to null to get rid of tasks
 // often run after submission of form to clear out

 // clear input
 taskInput.value=' ';
//
// form.addEventListener('submit',runEvent);
//
// function runEvent(e){
//   console.log(`Event Type: ${e.type}`);
//   // get input value
//   console.log(taskInput.value)
//   e.preventDefault();
// }

// event that we can run on actual input and not the form

// keydown
// taskInput.addEventListener('keydown',runEvent);

// keyup
// taskInput.addEventListener('keyup',runEvent);

// keypress
// taskInput.addEventListener('keypress',runEvent);


// Focus
// taskInput.addEventListener('focus',runEvent);

// blur
// taskInput.addEventListener('blur',runEvent);

// Cut
// taskInput.addEventListener('cut',runEvent);

//paste
// taskInput.addEventListener('paste',runEvent);

// actual input event that fires on nay taskInput
 // input
// taskInput.addEventListener('input',runEvent);

// change event-->used on select list so we added select in html line 28 and disabled materialize css.
select.addEventListener('change',runEvent);

function runEvent(e){
  console.log(`Event Type: ${e.type}`);
  // console.log(e.target.value);
  // key down will always be 1 behind. Its like hiting enter before you type  anything in where with keyup you are putting a value in the field and then sending it afterwards.
  // heading.innerText=e.target.value;
}
