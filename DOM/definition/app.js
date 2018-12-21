DOM   stands for the document object model.And it's basically a structured representation of an HTML document.It can be thought of kind of as a tree of nodes or elements created by the browser.and when I say node or element I mean  any of the HTML tags ;pretty much anything that is in the document.

And we can use javascript to manipulate these DOM Elements or nodes.
The Dom is object oriented meaning that each node has its own set of properties and methods that wecan change we can add we can remove.Now the browser gives us a window object and inside that we have a document object.

And this represents just that the loaded document or web page and then we have a root element underneath that which is the Html  tag and  each element.
Then from there we have body tags and we have a head tag and body tag which are actually siblings youcan see they're on the same level in this tree.

And then in the head we have things like meta tags we have our title in the body we have of course our output which is you know H1 tags and links and HTML5 semantic header tags for tagsthings like that.So if you are not too familiar with javascript but you've built HTML pages with some CSS thenthis probably looks very familiar.

You're just thinking it's an Html page but what you probably don't know is that we can manipulate this stuff with javascript  pretty easily and there are libraries like Jay Querrey which technically make it a little bit easier but it's really worth learning how to do this stuff with Vanilla javascript.

Especially now with queries selector and you can do things pretty much just as easily as you would with jquery as far as Dom selection and manipulation.
 not using jquery. makes it faster we don't have the overhead of the extra of the extra library so it's definitely worth learning.


The document object-->
so this has just a ton of different methods and properties and stuff attached to it.So we're going to just go ahead and console logs just a bunch of stuff from this just so we can take a look at what it contains. And then after that we'll move on to the different ways to select things from the DOM, switch, document.get elementbyid and using our query selectors things like that.
