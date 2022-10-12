
<a name="readme-top"></a>
<!--




-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bright-webb/brightwebbjs/readMe">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h3 align="center">brightwebbjs</h3>

  <p align="center">
    Brightwebbjs is a javascript library that makes it easy to manipulate the DOM and make your web application more interactive.
    <br />
    <a href="https://github.com/bright-webb/brightwebbjs/readMe"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/bright-webb/brightwebbjs/readMe/issues">Report Bug</a>
    ·
    <a href="https://github.com/bright-webb/brightwebbjs/readMe/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



 Brightwebbjs is a javascript library that makes it easy to manipulate the DOM and make your web application more interactive.

 Comes with predefined methods written in vanilla javascript.
  ```

### Installation

```
  Clone the repo
  ```sh
   git clone https://github.com/bright-webb/brightwebbjs.git
   ```
  Using npm
   ```sh
   npm install brightwebbjs@latest
   ```



<!-- USAGE EXAMPLES -->
## Usage

```
Create an instance of the Bright object  
var $ = new Bright() 
```

```  

var $ = new Bright();

// version
console.log($.version); // 1.1.15

// ready method example 
// this will run when the DOM is ready
$.ready(function(){
    console.log('ready'); 
});

// reference to the dom
console.log($.dom); // document

// reference to the window
console.log($.window); // window

// reference to the Bright object
console.log($.self()) // object


// delay method example
// this will run after 2 seconds
$.delay(function(){
    console.log('delay'); 
}, 2000);

// select method example
// this will select the first element with the id of 'test'
var test = $.select('#test');

// select all method example
// this will select all elements with the class of 'test'
var tests = $.selectAll('.test');

// select element by attribute and value
// this will select all elements with the attribute of 'data-test' and value of 'test'
var tests = $.selectByAttribute('data-test', 'test');

// select all elements by attribute and value
// this will select all elements with the attribute of 'data-test' and value of 'test'
var tests = $.selectAllByAttribute('data-test', 'test');

// select element method example
// this will select the first element with the id of 'test'
 $.selectElement('#test', function(element){
    console.log(element);
});

// select value
// this will select the value of the first element with the id of 'test'
var tests = $.selectValue('#test');

// mount method example
// This will  mount html inside an element with id of test
$.mount('#test', '<h1>Test</h1>');

// unmount method example
// This will  unmount html inside an element with id of test
$.unmount('#test');


// insert method example
// This will insert html inside an element with id of test
$.insert("#test", "<h1>Test</h1>");

// insertBefore method example
// This will insert html before an element with id of test
$.insertBefore("#test", "<h1>Test</h1>");

// insertAfter method example
// This will insert html after an element with id of test
$.insertAfter("#test", "<h1>Test</h1>");

// switchClass method example
// this will switch the class of an element with id of test to 'test' if it is not already set and remove it if it is set
$.switchClass('#test', '.test');


// foreach method example
// this will iterate through array and return the current item
var arr = ['test', 'test2']
$.forEach(arr, function(item){
    console.log(arr[item]);
});


// on method example
// this will add a click event to an element with id of test
$.on('#test', 'click', function(){
    console.log('click');
});

// off method example
// this will remove a click event to an element with id of test
$.off('#test', 'click', function(){
    console.log('click');
})

// click method example
// this will add a click event to an element with id of test
$.click('#test', function(){
    console.log('click');
});

// submit method example
// this will add a submit event to an element with id of test
$.submit('#test', function(){
    console.log('submit');
});

// change method example
// this will add a change event to an element with id of test
$.change('#test', function(){
    console.log('change');
});

// other events method example 
/*
    blur
    focus
    keyup
    keydown
    keypress
    mouseover
    mouseout
    mousemove
    mouseenter
    mouseleave
*/

// trigger method example
// this will trigger a click event to an element with id of test
$.trigger('#test', 'click');

// selectById method example
// this will select the first element with the id of 'test'
var test = $.selectById('test');

// selectByClass method example
// this will select the first element with the class of 'test'
var test = $.selectByClass('test');

// selectByTag method example
// this will select the first element with the tag of 'div'
var test = $.selectByTag('div');

// selectByName method example
// this will select the first element with the name of 'test'
var test = $.selectByName('test');

// find method example
// this will select the first element with the id of 'test'
var test = $.find('#test');

// find all method example
// this will select all elements with the class of 'test'
var tests = $.findAll('.test');

// find all by class method example
// this will select all elements with the class of 'test'
var tests = $.findAllByClass('.test');

// find content method example
// this will select the content of the first element with the id of 'test'
var test = $.findContent('#test');

// find by id method example
// this will change the color of a button with an id ittribute of 'test' to red
$.findById('test', function(item){
    item.style.color = "red";
});

// find by class method example
// this will change the color of a with a class ittribute of 'test' to red
$.findByClass('test', function(item){
    item.style.color = "red";
});

// find by tag method example
// this will change the color of a div to red
$.findByTag('div', function(item){
    item.style.color = "red";
});

// get position method example
// this will get the position of an element with id of 'test'
var test = $.getPosition('#test');

// show method example
// this will show an element with id of 'test'
$.show('#test');

// hide method example
// this will hide an element with id of 'test'
$.hide('#test');

// toggle method example
// this will toggle an element with id of 'test'
$.toggle('#test');

// add class method example
// this will add a class of 'test' to an element with id of 'test'
$.addClass('#test', 'test');

// remove class method example
// this will remove a class of 'test' to an element with id of 'test'
$.removeClass('#test', 'test');

// toggle class method example
// this will toggle a class of 'test' to an element with id of 'test'
$.toggleClass('#test', 'test'); 

// has class method example
// this will check if an element with id of 'test' has a class of 'test'
$.hasClass('#test', 'test'); // returns true or false

// set attribute method example
// this will set the attribute of 'test' to 'test' on an element with id of 'test'
$.setAttribute('#test', 'test', 'test');

// get attribute method example
// this will get the attribute of 'test' on an element with id of 'test'
$.getAttribute('#test', 'test');

// select data
// this will select the data attribute of 'test' on an element with id of 'test'
$.selectData('#test', 'test');

// select style method example
// this will select the style attribute of 'color' on an element with id of 'test'
$.selectStyle('#test', 'color');

// set style method example
// this will set the style attribute of 'color' to 'red' on an element with id of 'test'
$.setStyle('#test', 'color', 'red');

// remove attribute method example
// this will remove the attribute of 'test' on an element with id of 'test'
$.removeAttribute('#test', 'test');

// get style method example
// this will get the style attribute of 'color' on an element with id of 'test'
$.getStyle('#test', 'color'); // returns the color

// set content method example
// this will set the content of an element with id of 'test' to 'test'
$.setContent('#test', 'test');

// get content method example
// this will get the content of an element with id of 'test'
$.getContent('#test'); // returns the content

// get value method example
// this will get the value of an element with id of 'test'
$.getValue('#test'); // returns the value

// set value method example
// this will set the value of an element with id of 'test' to 'test'
$.setValue('#test', 'test');

// get html method example
// this will get the html of an element with id of 'test'
$.getHtml('#test'); // returns the html

// set html method example
// this will set the html of an element with id of 'test' to 'test'
$.setHtml('#test', 'test');

// get text method example
// this will get the text of an element with id of 'test'
$.getText('#test'); // returns the text

// set text method example
// this will set the text of an element with id of 'test' to 'test'
$.setText('#test', 'test');

// set background color method example
// this will set the background color of an element with id of 'test' to 'blue'
$.setBackgroundColor('#test', 'blue');

// get background color method example
// this will get the background color of an element with id of 'test'
$.getBackgroundColor('#test'); // returns the background color

// set color method example
// this will set the color of an element with id of 'test' to 'red'
$.setColor('#test', 'red');

// parent method example
// this will get the parent of an element with id of 'test'
$.parent('#test'); // returns the parent element

// grandparent method example
// this will get the grandparent of an element with id of 'test'
$.grandparent('#test'); 

// child method example
// this will get the child of an element with id of 'test'
$.child('#test'); // returns the child element

// chidren method example
// this will get the children of an element with id of 'test'
$.children('#test');

// first child method example
// this will get the first child of an element with id of 'test'
$.firstChild('#test'); 

// last child method example
// this will get the last child of an element with id of 'test'
$.lastChild('#test');

// next sibling method example
// this will get the next sibling of an element with id of 'test'
$.nextSibling('#test');

// previous sibling method example
// this will get the previous sibling of an element with id of 'test'
$.previousSibling('#test');

// append method example
// this will append an element with id of 'test' to an element with id of 'test2'
$.append('#test', '#test2');

// appendchild method example
// this will append a child to an element with id of 'test'
$.appendChild('#test', 'test');

// prependchild method example
// this will prepend a child to an element with id of 'test'
$.prependChild('#test', 'test');

// removechild method example
// this will remove a child from an element with id of 'test'
$.removeChild('#test', 'test');

// remove method example
// this will remove an element with id of 'test'
$.remove('#test');

// create method example
// this will create a div element
$.create('div');

// create text node method example
// this will create a text node
$.createTextNode('test'); // returns the text node


// make request method example
// this will make a request to a url
$.request('/hello', function(data){
    console.log(data);
});

// make a request to a url and get the response as json
$.requestJson('/hello', function(data){
    console.log(data);
});

// make a request to a url and get the response as xml
$.requestXml('/hello', function(data){
    console.log(data);
});

// ajax method example
// this will make a request to a url
$.ajax({
    url: '/hello',
    method: 'GET',
    data: {
        name: 'test'
    },
    success: function(data){
        console.log(data);
    }
});

// post method example
// this will make a post request to a url
$.post('/hello', {
    name: 'test'
}, function(data){
    console.log(data);
});

// get method example
// this will make a get request to a url
$.get('/hello', function(data){
    console.log(data);
});

// put method example
// this will make a put request to a url
$.put('/hello', {
    name: 'test'
}, function(data){
    console.log(data);
});


// get javascript method example
// this will get a javascript file
$.getJs('/script', function(data){
    console.log(data);
});

// get css method example
// this will get a css file
$.getCss('/style', function(data){
    console.log(data);
});

// get html method example
// this will get a html file
$.getHtml('/html', function(data){
    console.log(data);
});

// load javascript method example
// this will load a javascript file
$.loadJs('/script');

// load css method example
// this will load a css file
$.loadCss('/style');

// load html method example
// this will load a html file
$.loadHtml('/html');

// set cookie method example
// this will set a cookie
$.setCookie('k', 'v', 2); // expires in 2 days

// get cookie method example
// this will get a cookie
$.getCookie('k'); // returns the value of the cookie

// remove cookie method example
// this will remove a cookie
$.deleteCookie('k');

// serialize method example
// this will serialize a form
$.serialize('#form');

// bind method example
// this will bind an event to an element
$.bind('#test', 'click', function(){
    console.log('test');
});

// unbind method example
// this will unbind an event from an element
$.unbind('#test', 'click', function(){
    console.log('test');
});

// model method example
// this will create a model
$.model('test', {
    name: 'test',
    age: 10
}); // returns a model

// get model method example
// this will get a model
$.getModel('test'); // returns the model

// set model method example
// this will set a model
$.setModel('test', {
    name: 'test',
    age: 10
}); // returns the model

// remove model method example
// this will remove a model
$.removeModel('test');

// create a view
var view = $.view('test', {
    template: '<div>Hello {name}</div>',
});

view.render({name: "John Doe"}) // Returns Hello John Doe



// router method example
// this will route a url
$.router({
    '/test': function(){
        console.log('test'); // this will be called when the url is /test
    }
});

// navigate method example
// this will navigate to a url
$.navigate('/test');


// template method example
// this will create a template
$.template('<div>{name}</div>'); // returns html template


// render method example
// this will render a template
$.render('test', { 
    name: 'test'
}); // returns the rendered template


// replace method example
// replace value of form element
$.replace('#test', 'test');

// get form value method example
// get value of form element
$.getFormValue('#test');

// set form value method example
// set value of form element
$.setFormValue('#test', 'test'); // returns the element

// repeat method example
repeat(function(){
    console.log('test'); // this will be repeated 5 times
},5);

// repeat with delay method example
repeatWithDelay(function(){
    console.log('test'); // this will be repeated 5 times with a delay of 1 second
},5, 1000);

// delete method example
// this will delete an element
$.delete('#test');

// delete all method example
// this will delete all elements
$.deleteAll('#test');

// bind data method example
// this will bind data to an element
$.bindData('#test', {
    name: 'test'
});


// regular expression method example
// this will create a regular expression
$.regex('test', /test/); // returns the regular expression

// accept only numbers method example
// this will accept only numbers on an input element
$.acceptOnlyNumbers('#test');

// accept only letters method example
// this will accept only letters on an input element
$.acceptOnlyLetters('#test');

// accept only letters and numbers method example
// this will accept only letters and numbers on an input element
$.acceptLettersNumbers("#test"); 

// match characters method example
// this will match characters in a string
$.matchCharacters('test', 'test'); 

// match numbers method example
// this will match numbers in a string
$.matchNumbers('24');

// match letters method example
// this will match letters in a string
$.matchLetters('hello'); 


// allow characters method example
// regular expression to allow characters
$.allowCharacters('test');

// allow numbers method example
// regular expression to allow numbers
$.allowNumbers();

// allow letters method example
// regular expression to allow letters
$.allowLetters();

// if a string contains a character method example
// this will check if a string contains a character
$.containsCharacter('test', 't'); // returns true

// check if password is strong method example
// this will check if a password is strong
$.isStrongPassword('test'); // returns false

// check for valid email method example
// this will check if an email is valid
$.isEmail('test'); // returns false

// if url is valid
// this will check if a url is valid
$.isUrl('test'); // returns false

// if phone number is valid
// this will check if a phone number is valid
$.isPhoneNumber('test'); // returns false

// if zip code is valid
// this will check if a zip code is valid
$.isZipCode('test'); // returns false

// check if date is valid
$.isDate('test'); // returns false

// check if time is valid
$.isTime('test'); // returns false

// credit card is valid
$.isCreditCard('test'); // returns false

// check if social security number is valid
$.isSocialSecurityNumber('test'); // returns false

// check if ip address is valid
$.isIpAddress('test'); // returns false

// get current date
$.currentDate(); // returns the current date

// get current time
$.currentTime(); // returns the current time

// get current date and time
$.currentDateTime(); // returns the current date and time

// get current year
$.currentYear(); // returns the current year

// get current month
$.currentMonth(); // returns the current month

// get current day
$.currentDay(); // returns the current day

// get current hour
$.currentHour(); // returns the current hour

// get current minute
$.currentMinute(); // returns the current minute

// countdown method example
// this will countdown from 5
$.countdown("#test", 5, function(){
    console.log('test'); // this will be called when the countdown is finished
});

// generate random number
$.randomNumber(1, 10); // returns a random number between 1 and 10

// random color
$.randomColor(); // returns a random color in hex

// random string
$.randomString(10); // returns a random string with a length of 10

// random item from array
$.randomItem(['test', 'test2']); // returns a random item from the array

// shuffle array
$.shuffle(['test', 'test2']); // returns a shuffled array

// random hex string
$.randomHexString(10); // returns a random hex string with a length of 10

// list method example
// this will create a list
$.list('#test', ['test', 'test2']); // returns the list

// scroll percentage method example
// this will get the scroll percentage
$.scrollPercentage(); // returns the scroll percentage

// scroll top
$.scrollTop(); 

// scroll bottom
$.scrollBottom();

// scroll to element
$.scrollTo('#test');

// mask method example
// this will mask an element
$.mask('#test'); // returns the element

// unmask method example
// this will unmask an element
$.unmask('#test'); // returns the element

// create element
$.createElement('div', {
    id: 'test'
}); // returns the element

// count characters in a string
$.count('test'); // returns the number of characters in a string

// count words in a string
$.countWords('test'); // returns the number of words in a string

// if element is visible
$.isVisible('#test'); // returns true

// is visible
$.isHidden('#test'); // returns false

// is checked
$.isChecked('#test'); // returns false

// is selected
$.isSelected('#test'); // returns false

// is disabled
$.isDisabled('#test'); // returns false

// is enabled
$.isEnabled('#test'); // returns true

// is empty
$.isEmpty('#test'); // returns true

// if an item is in an array
$.inArray('test', ['test', 'test2']); // returns true

// if an item is in an object
$.inObject('test', {
    test: 'test'
}); // returns true

// if an item is in a string
$.inString('test', 'test'); // returns true

```



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
