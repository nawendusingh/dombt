// create elements and insert into DOM


// create
const li=document.createElement('li');

// Add class
li.className='collection-item';

// add id
// li.id='new-item';

// add attribute
// li.setAttribute('title', 'New Item');


// create textnode & append
li.appendChild(document.createTextNode('Hello World'));

// add link ;line 18  then skip to 29 then come back to 20-26
const link=document.createElement('a');
link.className='delete-item secondary-content';
// add icon html
link.innerHTML='<i class="fa fa-remove"></i>';
// append link ti li
li.appendChild(link);

// insert into DOM append li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);
