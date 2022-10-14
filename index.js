/*
Author: Bright Webb
Date: 2022-10-1
Description: This is a simple module of javascript to save coding time with lots of methods to use in your projects.
*/

module.exports =  class Bright{

    // version
    version(){
        return '1.1.15';
    }
    
    // configure a callback function to be executed when the DOM is fully loaded
    ready(callback){
        if(document.readyState != 'loading'){
            callback();
        }else{
            document.addEventListener('DOMContentLoaded', callback);
        }
    }
    
        // reference to the document
        dom(){
            return document;
        }
    
        // reference to the window
        window(){
            return window;
        }
    
        // reference to the object
        self(){
            return this;
        }
    
    
    // provide a callback function to be executed after a specified number of milliseconds
    delay(callback, milliseconds){
        setTimeout(callback, milliseconds);
    }
    
    
    // selector is the selector of the element
    select(selector){
        var element;
       if(selector instanceof Node){
            element =  selector;
       }
        else{
            element = document.querySelector(selector);
        }
    
       return element;
    
    }
    
      // select all elements
      selectAll(selector){
        if(selector instanceof Node){
            return selector;
       }
        else{
            return document.querySelectorAll(selector);
        }
    }
    
    
    // select element by attribute
    selectByAttribute(attribute, value){
        return this.select('['+attribute+'="'+value+'"]');
    }
    
    // select all elements by attribute
    selectAllByAttribute(attribute, value){
        return this.selectAll('['+attribute+'="'+value+'"]');
    }
    
    // select element
    selectElement(selector, callback){
        var element =  this.select(selector);
        callback.call(element);
    }
    
    // select value of an input element
    selectValue(selector){
        return this.select(selector).value;
    }
    
    
    
    // The mount method is used to insert html inside an element
    mount(selector, html){
        var element =  this.select(selector);
        element.innerHTML = html;
    }
    
    // The unmount method is used to remove html inside an element
    unmount(selector){
        var element =  this.select(selector);
        element.innerHTML = '';
    }
    
    
    
    // Insert an element inside an element
    insert(selector, html){
        var element =  this.select(selector);
        element.insertAdjacentHTML('beforeend', html);
    }
    
    // Insert an element before an element
    insertBefore(selector, html){
        var element =  this.select(selector);
        element.insertAdjacentHTML('beforebegin', html);
    }
    
    // Insert an element after an element
    insertAfter(selector, html){
        var element =  this.select(selector);
        element.insertAdjacentHTML('afterend', html);
    }
    
    
    // provide method to add a class to an element if it doesn't have it and remove it if it has it
    switchClass(selector, className){
        var element;
        if(this.select(selector)){
             element =  this.select(selector);
        }
        else{
            element = selector;
        }
    
        if(element.classList.contains(className)){
            element.classList.remove(className);
        }else{
            element.classList.add(className);
        }
    }
    
    
    // for each loop
    forEach(array, callback){
        for(let i = 0; i < array.length; i++){
            callback.call(array[i], i);
        }
    }
    
    // add event listener
    on(selector, event, callback){
        var element;
        if(this.select(selector)){
             element =  this.select(selector);
        }
        else{
            element = selector;
        }
    
        element.addEventListener(event, callback);
    }
    
    // remove event listener
    off(selector, event, callback){
        var element;
        if(this.select(selector)){
            element =  this.select(selector);
        }
        else{
            element = selector;
        }
    
        element.removeEventListener(event, callback);
    }
    
    // add click event listener
    click(selector, callback){
        this.on(selector, 'click', callback);
    }
    
    // add submit event listener
    submit(selector, callback){
        this.on(selector, 'submit', callback);
    }
    
    // add change event listener
    change(selector, callback){
        this.on(selector, 'change', callback);
    }
    
    // blur event listener
    blur(selector, callback){
        this.on(selector, 'blur', callback);
    }
    
    // focus event listener
    focus(selector, callback){
        this.on(selector, 'focus', callback);
    }
    
    // add keyup event listener
    keyup(selector, callback){
        this.on(selector, 'keyup', callback);
    }
    
    // add keydown event listener
    keydown(selector, callback){
        this.on(selector, 'keydown', callback);
    }
    
    // add keypress event listener
    keypress(selector, callback){
        this.on(selector, 'keypress', callback);
    }
    
    // add mouseover event listener
    mouseover(selector, callback){
        this.on(selector, 'mouseover', callback);
    }
    
    // add mouseout event listener
    mouseout(selector, callback){
        this.on(selector, 'mouseout', callback);
    }
    
    // add mousemove event listener
    mousemove(selector, callback){
        this.on(selector, 'mousemove', callback);
    }
    
    // add mouseenter event listener
    mouseenter(selector, callback){
        this.on(selector, 'mouseenter', callback);
    }
    
    // add mouseleave event listener
    mouseleave(selector, callback){
        this.on(selector, 'mouseleave', callback);
    }
    
    // trigger an event
    trigger(selector, event){
        var element =  this.select(selector);
        var event = new Event(event);
        element.dispatchEvent(event);
    }
    
    // select element by id
    selectById(id){
        return document.getElementById(id);
    }
    
    // select element by class
    selectByClass(className){
        return document.getElementsByClassName(className);
    }
    
    // select element by tag
    selectByTag(tag){
        return document.getElementsByTagName(tag);
    }
    
    // select element by name
    selectByName(name){
        return document.getElementsByName(name);
    }
    
    
    // find element
    find(selector, callback){
        var element =  this.select(selector);
        callback(element);
    }
    
    // find all elements
    findAll(selector){
        return this.selectAll(selector);
    }
    // find all elements with a class
    findAllByClass(className){
        return this.select('.' + className);
    }
    // find content of an element
    findContent(selector){
        return  this.select(selector).innerHTML;
    }
    
    // find element by id
    findById(id, callback){
        this.find(`#${id}`, callback);
    }
    
    // find element by class
    findByClass(className, callback){
        this.find(`.${className}`, callback);
    }
    
    // find element by tag
    findByTag(tag, callback){
        this.find(tag, callback);
    }
    
    // get position of an element
    getPosition(selector){
        return  this.select(selector).getBoundingClientRect();
    }
    // make an element visible
    show(selector){
        this.select(selector).style.display = 'block';
    }
    
    // make an element invisible
    hide(selector){
        this.select(selector).style.display = 'none';
    }
    
    // toggle visibility of an element
    toggle(selector){
        var element =  this.select(selector);
        if(element.style.display == 'none'){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    }
    
    // add class to an element
    addClass(selector, className){
        this.select(selector).classList.add(className);
    }
    
    // remove class from an element
    removeClass(selector, className){
        this.select(selector).classList.remove(className);
    }
    
    // toggle class of an element
    toggleClass(selector, className){
        this.select(selector).classList.toggle(className);
    }
    
    // check if an element has a class
    hasClass(selector, className){
        return this.select(selector).classList.contains(className);
    }
    
    // set attribute of an element
    setAttribute(selector, attribute, value){
        this.select(selector).setAttribute(attribute, value);
    }
    
    // get attribute of an element
    getAttribute(selector, attribute){
        return  this.select(selector).getAttribute(attribute);
    }
    
    // select data attribute of an element
    selectData(selector, data){
        return  this.select(selector).dataset[data];
    }
    
    // select style attribute of an element
    selectStyle(selector, style){
        return  this.select(selector).style[style];
    }
    
    // set style of an element
    setStyle(selector, style, value){
         this.select(selector).style[style] = value;
    }
    
    
    // remove attribute of an element
    removeAttribute(selector, attribute){
         this.select(selector).removeAttribute(attribute);
    }
    
    
    // get style of an element
    getStyle(selector, style){
        return  this.select(selector).style[style];
    }
    
    // set content of an element
    setContent(selector, content){
         this.select(selector).innerHTML = content;
    }
    
    // get content of an element
    getContent(selector){
        return  this.select(selector).innerHTML;
    }
    
    // set value of an element
    setValue(selector, value){
         this.select(selector).value = value;
    }
    
    // get value of an element
    getValue(selector){
        return  this.select(selector).value;
    }
    
    // set html of an element
    setHtml(selector, html){
         this.select(selector).innerHTML = html;
    }
    
    // get html of an element
    getHtml(selector){
        return  this.select(selector).innerHTML;
    }
    
    // set text of an element
    setText(selector, text){
         this.select(selector).innerText = text;
    }
    
    // get text of an element
    getText(selector){
        return this.select(selector).innerText;
    }
    
    // set background color of an element
    setBackgroundColor(selector, color){
         this.select(selector).style.backgroundColor = color;
    }
    
    // get background color of an element
    getBackgroundColor(selector){
        return  this.select(selector).style.backgroundColor;
    }
    
    // set color of an element
    setColor(selector, color){
         this.select(selector).style.color = color;
    }
    
    // parent of an element
    parent(selector){
        return  this.select(selector).parentNode;
    }
    
    // grandparent of an element
    grandparent(selector){
        return  this.select(selector).parentNode.parentNode;
    }
    
    // child of an element
    child(selector){
        return  this.select(selector).childNodes;
    }
    
    
    // children of an element
    children(selector){
        return  this.select(selector).children;
    }
    
    // first child of an element
    firstChild(selector){
        return  this.select(selector).firstChild;
    }
    
    // last child of an element
    lastChild(selector){
        return  this.select(selector).lastChild;
    }
    
    // next sibling of an element
    nextSibling(selector){
        return  this.select(selector).nextSibling;
    }
    
    // previous sibling of an element
    previousSibling(selector){
        return  this.select(selector).previousSibling;
    }
    
    // append child to an element
    appendChild(selector, child){
         this.select(selector).appendChild(child);
    }
    
    // prepend child to an element
    prependChild(selector, child){
         this.select(selector).prepend(child);
    }
    
    // remove child from an element
    removeChild(selector, child){
         this.select(selector).removeChild(child);
    }
    
    // remove an element
    remove(selector){
         this.select(selector).remove();
    }
    
    // create an element
    create(tag){
        return document.createElement(tag);
    }
    
    // create text node
    createTextNode(text){
        return document.createTextNode(text);
    }
    
    
    // append method
    append(selector, content){
         this.select(selector).innerHTML += content;
    }
    
    
    // make a request to a url
    request(url, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send();
    }
    
    // make a request to a url and get json
    requestJson(url, callback){
        this.request(url, function(response){
            callback(JSON.parse(response));
        });
    }
    
    // make a request to a url and get xml
    requestXml(url, callback){
        this.request(url, function(response){
            callback(new DOMParser().parseFromString(response, 'text/xml'));
        });
    }
    
    // fetch data from a url
    fetch(url, callback){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            callback(data);
        });
    }
    
    // perform ajax request
    ajax(options){
        var request = new XMLHttpRequest();
        request.open(options.method, options.url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                options.success(request.responseText);
            }
        };
        request.send(options.data);
    }
    
    // post request to a server
    post(url, data, callback){
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send(data);
    }
    
    // get request to a server
    get(url, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send();
    }
    
    // put request to a server
    put(url, data, callback){
        var request = new XMLHttpRequest();
        request.open('PUT', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send(data);
    }
    
    // load a page
    load(url, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send();
    }
    
    // get javascript
    getJs(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/javascript'));
        });
    }
    
    // get css
    getCss(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/css'));
        });
    }
    
    // get html
    getHtml(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/html'));
        });
    }
    
    // load javascript
    loadJs(url){
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }
    
    // load css
    loadCss(url){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }
    
    // serialize form data
    serialize(selector){
        var form =  this.select(selector);
        var data = {};
        for(var i = 0; i < form.elements.length; i++){
            var element = form.elements[i];
            data[element.name] = element.value;
        }
        return data;
    }
    
    // set cookie
    setCookie(name, value, days){
        var expires = '';
        if(days){
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    // get cookie
    getCookie(name){
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++){
            var c = ca[i];
            while(c.charAt(0) == ' '){
                c = c.substring(1, c.length);
            }
            if(c.indexOf(nameEQ) == 0){
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
    
    // delete cookie
    deleteCookie(name){
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    
    // bind an event to an element
    bind(selector, event, callback){
         this.select(selector).addEventListener(event, callback);
    }
    
    // unbind an event from an element
    unbind(selector, event, callback){
         this.select(selector).removeEventListener(event, callback);
    }
    
    // create a model
    model(name, data){
        var model = {};
        model.name = name;
        model.data = data;
        model.clear = function(){
            localStorage.removeItem(model.name);
        };
        model.add = function(key, value){
            model.data[key] = value;
        };
    
        model.remove = function(key){
            delete model.data[key];
        };
        return model;
    }
    
    // get a model
    getModel(name){
        return JSON.parse(localStorage.getItem(name));
    }
    
    // set a model
    setModel(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }
    
    // clear a model
    clearModel(name){
        localStorage.removeItem(name);
    }
    
    
    
    // create a view
    view(name, template){
        var view = {};
        view.name = name;
        view.template = template;
        view.render = function(data){
            var html = view.template;
            for(var key in data){
                html = html.replace('{' + key + '}', data[key]);
            }
            return html;
        };
        return view;
    }
    
    // router
    router(routes){
        var router = {};
        router.routes = routes;
        router.navigate = function(path){
            for(var i = 0; i < router.routes.length; i++){
                var route = router.routes[i];
                if(route.match(path)){
                    route.callback();
                    return;
                }
            }
        };
        return router;
    }
    
    // ajax navigation
    navigate(url, title=null){
        this.load(url, function(response){
            var html = new DOMParser().parseFromString(response, 'text/html');
            
            if(title == null){
                 title = html.querySelector('title').innerHTML;
            }
            else{
                title = title
            }
            var path = url.split('/').pop();
            var body = html.querySelector('body').innerHTML;
            document.title = title;
            window.history.pushState({path: path}, '', url);
            document.body.innerHTML = body;
        });
    }
    
    
    // create a template
    template(html){
        return html;
    }
    
    // replace content of an element
    replace(selector, content){
         this.select(selector).outerHTML = content;
    }

    // scan for elements
    scan(){
        var elements = document.querySelectorAll('[data-scan]');
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var scan = element.getAttribute('data-scan');
            var data = element.getAttribute('data-data');
            var template = element.getAttribute('data-template');
            var model = this.getModel(scan);
            var view = this.view(scan, this.template(template));
            var html = '';
            for(var i = 0; i < model.length; i++){
                html += view.render(model[i]);
            }
            element.innerHTML = html;
        }
    }


    // create a component
    component(name, template, controller){
        var component = {};
        component.name = name;
        component.template = template;
        component.controller = controller;
        component.render = function(data){
            var html = component.template;
            for(var key in data){
                html = html.replace('{' + key + '}', data[key]);
            }
            return html;
        };

        component.controller();
        return component;
    }

    // how to use a component
    // var component = this.component('component-name', this.template('html'), function(){
    //     // controller code
    // });
    

    // how to use a component
    // var component = this.component('component-name', this.template('html'), function(){
    //  controller code and usuage
    // });
    // var html = component.render({key: value});
    // this.replace('selector', html);



    // use a component
    use(name, selector, data){
        var component = this.component(name);
        var html = component.render(data);
        this.replace(selector, html);
    }

    // create a controller
    controller(name, callback){
        var controller = {};
        controller.name = name;
        controller.callback = callback;
        controller.callback();
        return controller;
    }

    // usuage of a controller example
    // var controller = this.controller('home', function(){
    //     this.bind('#button', 'click', function(){
    //         alert('hello world');
    //     });

    //     this.bind('#button', 'click', function(){
    //         alert('hello world');

    //    });

    // });

    
    // get the value of a form element
    getFormValue(selector){
        return  this.select(selector).value;
    }
    
    // set the value of a form element
    setFormValue(selector, value){
         this.select(selector).value = value;
    }
    
    // Repeat function
    repeat(callback, times){
        for(var i = 0; i < times; i++){
            callback();
        }
    }
    
    // Repeat a function with a delay
    repeatWithDelay(callback, times, delay){
        for(var i = 0; i < times; i++){
            setTimeout(callback, delay);
        }
    }
    
    // delete element from dom
    delete(selector){
         this.select(selector).remove();
    }
    
    // delete all elements from dom
    deleteAll(selector){
         this.selectAll(selector).forEach(function(element){
            element.remove();
        });
    }
    
    // bind data to an element from model
    bindData(selector, model){
         this.select(selector).innerHTML = model;
    }
    // regular expression
    regex(pattern, text){
        var regex = new RegExp(pattern);
        return regex.test(text);
    }
    
    
    // accept only numbers
    acceptNumbers(selector){
         this.select(selector).addEventListener('keypress', function(event){
            if(event.which < 48 || event.which > 57){
                event.preventDefault();
            }
        });
    }
    
    // accept only letters
    acceptLetters(selector){
         this.select(selector).addEventListener('keypress', function(event){
            if(event.which < 65 || event.which > 90){
                event.preventDefault();
            }
        });
    }
    
    // accept only letters and numbers
    acceptLettersNumbers(selector){
         this.select(selector).addEventListener('keypress', function(event){
            if(event.which < 48 || event.which > 57 && event.which < 65 || event.which > 90){
                event.preventDefault();
            }
        });
    }
    
    // match characters in a string
    matchCharacters(string, characters){
        var matches = [];
        for(var i = 0; i < string.length; i++){
            if(characters.indexOf(string[i]) > -1){
                matches.push(string[i]);
            }
        }
        return matches;
    }
    
    // match numbers in a string
    matchNumbers(string){
        return this.matchCharacters(string, '0123456789');
    }
    
    // match letters in a string
    matchLetters(string){
        return this.matchCharacters(string, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    
    // regular expression to allow only characters
    allowCharacters(characters){
        return new RegExp('^[' + characters + ']+$');
    }
    
    // regular expression to allow only numbers
    allowNumbers(){
        return this.allowCharacters('0123456789');
    }
    
    // regular expression to allow only letters
    allowLetters(){
        return this.allowCharacters('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    
    // check if a string contains a character
    containsCharacter(string, character){
        return string.indexOf(character) > -1;
    }
    
    // check if a string contains a number
    containsNumber(string){
        return this.containsCharacter(string, '0123456789');
    }
    
    // check if password is strong
    isStrongPassword(password){
        return password.length >= 8 && this.containsNumber(password) && this.containsCharacter(password, '!@#$%^&*()_+');
    }
    
    // if email is valid
    isEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // if url is valid
    isUrl(url){
        return /^(http|https):\/\/[^\s]+$/.test(url);
    }
    
    // if phone number is valid
    isPhoneNumber(phone){
        return /^\d{3}-\d{3}-\d{4}$/.test(phone);
    }
    
    // if zip code is valid
    isZipCode(zip){
        return /^\d{5}$/.test(zip);
    }
    
    // if date is valid
    isDate(date){
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }
    
    // if time is valid
    isTime(time){
        return /^\d{2}:\d{2}$/.test(time);
    }
    
    // if credit card is valid
    isCreditCard(card){
        return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card);
    }
    
    // if social security number is valid
    isSocialSecurityNumber(ssn){
        return /^\d{3}-\d{2}-\d{4}$/.test(ssn);
    }
    
    // if ip address is valid
    isIpAddress(ip){
        return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip);
    }
    
    // get current date
    currentDate(){
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    
    // get current time
    currentTime(){
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes();
    }
    
    // get current date and time
    currentDateTime(){
        return this.currentDate() + ' ' + this.currentTime();
    }
    
    // get current year
    currentYear(){
        return new Date().getFullYear();
    }
    
    // get current month
    currentMonth(){
        var month = new Date().getMonth() + 1;
        return month < 10 ? '0' + month : month;
    }
    
    // get current day
    currentDay(){
        var day = new Date().getDate();
        return day < 10 ? '0' + day : day;
    }
    
    // get current hour
    currentHour(){
        var hour = new Date().getHours();
        return hour < 10 ? '0' + hour : hour;
    }
    
    // get current minute
    currentMinute(){
        var minute = new Date().getMinutes();
        return minute < 10 ? '0' + minute : minute;
    }
    
    
    // countdown method
    countdown(selector, seconds, callback){
        var element =  this.select(selector);
        var interval = setInterval(function(){
            element.innerHTML = seconds;
            seconds--;
            if(seconds < 0){
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
    
    // generate random number
    randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // generate random color
    randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // get random item from array
    randomItem(array){
        return array[Math.floor(Math.random() * array.length)];
    }
    
    // array shuffle
    shuffle(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    // get random string
    randomString(length){
        var string = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(var i = 0; i < length; i++){
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }
    
    // get random hex string
    randomHexString(length){
        var string = '';
        var characters = '0123456789ABCDEF';
        for(var i = 0; i < length; i++){
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }
    
    // list method
    list(selector, array){
        var element =  this.select(selector);
        var html = '';
        for(var i = 0; i < array.length; i++){
            html += '<li>' + array[i] + '</li>';
        }
        element.innerHTML = html;
    }
    
    
    //scroll percentage
    scrollPercentage(){
        var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }
    
    // scroll to top
    scrollTop(){
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c > 0){
            window.requestAnimationFrame(this.scrollTopAnimation);
            window.scrollTo(0, c - c / 8);
        }
    }
    
    // scroll to bottom
    scrollBottom(){
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c < document.body.scrollHeight){
            window.requestAnimationFrame(this.scrollBottomAnimation);
            window.scrollTo(0, c + c / 8);
        }
    }
    
    // scroll to element
    scrollTo(selector){
        var element =  this.select(selector);
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c > element.offsetTop){
            window.requestAnimationFrame(this.scrollToElementAnimation);
            window.scrollTo(0, c - c / 8);
        }
        if(c < element.offsetTop){
            window.requestAnimationFrame(this.scrollToElementAnimation);
            window.scrollTo(0, c + c / 8);
        }
    }
    
    
    // create html element
    createElement(tag, attributes){
        var element = document.createElement(tag);
        for(var attribute in attributes){
            element.setAttribute(attribute, attributes[attribute]);
        }
        return element;
    }
    
    // count characters in a string
    count(string){
        return string.length;
    }
    
    // count words in a string
    countWords(string){
        return string.split(' ').length;
    }
    
    // if element is in viewport
    inViewport(element){
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // check if element is empty
    isEmpty(selector){
        var element =  this.select(selector);
        return element.innerHTML === '';
    }
    
    // check if element is visible
    isVisible(selector){
        var element =  this.select(selector);
        return element.style.display !== 'none';
    }
    
    // check if element is hidden
    isHidden(selector){
        var element =  this.select(selector);
        return element.style.display === 'none';
    }
    
    // check if element is checked
    isChecked(selector){
        var element =  this.select(selector);
        return element.checked;
    }
    
    // check if element is selected
    isSelected(selector){
        var element =  this.select(selector);
        return element.selected;
    }
    
    // check if element is disabled
    isDisabled(selector){
        var element =  this.select(selector);
        return element.disabled;
    }
    
    // check if element is enabled
    isEnabled(selector){
        var element =  this.select(selector);
        return !element.disabled;
    }
    
    // if an item is in an array
    inArray(item, array){
        return array.indexOf(item) !== -1;
    }
    
    // if an item is in an object
    inObject(item, object){
        return object.hasOwnProperty(item);
    }
    
    // if an item is in a string
    inString(item, string){
        return string.indexOf(item) !== -1;
    }
        // animate content on page load
    animateContent(){
        var elements = document.querySelectorAll('[data-animate]');
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var animation = element.getAttribute('data-animate');
            var delay = element.getAttribute('data-delay');
            var duration = element.getAttribute('data-duration');
            element.style.animationDelay = delay;
            element.style.animationDuration = duration;
            element.classList.add('animated', animation);
        }

    }

    // animate content on scroll
    animateContentOnScroll(){
        var elements = document.querySelectorAll('[data-animate]');
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var animation = element.getAttribute('data-animate');
            var delay = element.getAttribute('data-delay');
            var duration = element.getAttribute('data-duration');
            if(this.inViewport(element)){
                element.style.animationDelay = delay;
                element.style.animationDuration = duration;
                element.classList.add('animated', animation);
            }
        }

    }

}
    
    
    
    
    
    
    