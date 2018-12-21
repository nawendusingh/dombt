 // Event bubbling-->when an event happens on aprticular elemnt of the dom it bubbles up through its parent nodes

 // Event delegation-->opposite to bubbling.we put event listener to a parent node and use logic to target the child node.in this example  we will use event delegation on  ul to target lis. Its done because all the lis have same class.


// Event bubbling
// we clcik on child element card title and all 4 will fire up
// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('card-title');
// });
//
// document.querySelector('.card-content').addEventListener('click',
// function(e){
//   console.log('card-content');
// });
//
//
// document.querySelector('.card').addEventListener('click',
// function(e){
//   console.log('card');
// });
//
// document.querySelector('.col').addEventListener('click',
// function(e){
//   console.log('col');
// });


// Event delegation
// lets see what happens w/o delegation
// put the event listeneron a parent of what u actually want  and put a condition  to find the target using 'e.target' & then add teh functionality

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);
// // This event works only on first li.here we need delegation
// // another use is when u dynamically insert into DOm using  JS.e.g. you insert list Item that was not there wen the page loaded
// function deleteItem(){
//   console.log('delete item');
// }
// parent can be any parent

document.body.addEventListener('click',deleteItem);

// function deleteItem(e){
//
//   console.log('delete item');
//   // need to find the target li or it will fire everywhere in the body
//   console.log(e.target);
// }

// so we add if condition
// function deleteItem(e){
//   if(e.target.className==='fa fa-remove'){
//       console.log('delete item');
//
//       //but this is selecting the <i> element but we want the link <a>
//   }
// }


// function deleteItem(e){
//   if(e.target.parentElement.className==='delete-item secondary-content'){
//       console.log('delete item');
// // it checks for all classes in the list so in future if we add a class,it will cause problems
//   }
// }
// so the best way to do this
function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
      console.log('delete item');
      // now add real functionality to the function
      // when we are clicking we are targeting the i.e. <a> tag
      // we want to delete list item which is the parent of <a> tag
      e.target.parentElement.parentElement.remove();

  }
}
