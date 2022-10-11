# brightwebbjs
is a set of javascript methods for javascript for repeatitive task and to boost development process and save coding time.
Feel free to contribute to this project and report any error you encounter.

# Installation

npm install brightwebbjs@latest
#

using brightwebbjs  
Create an instance of the Bright object  
var $ = new Bright()  

to check if the dom is loaded 
$.ready(function(){  
    // your code here
})

Below is the list of some methods


component(id, html) - The component method create a div element and append it to the document. The component method accepts two arguments, an id attribute, and html content

mount(selector, html) - The mount method insert html content into an existing element.
unmount(selector) - The unmount method removes content from an element
insert(selector, html) - The insert method insert html content inside selected element
insertBefore(selector, html) - insert html content before selected element
insertAfter(selector, html) - insert html content after selected element
switchClass(selector, className) - add a class to an element if it doesn't have it and remove it if it has it
loop(selector, callback) - loop through all elements
each(array, callback) - loop through array
current(callback) - reference to current element
self(callback) - reference to current function
forEach(array, callback) - loop through array
on(select, event, callback) - add an event listener



