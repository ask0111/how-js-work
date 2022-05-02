//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

var Scope = [{
    head: "Scope",
    first: "JavaScript allows nested blocks and therefore nested scopes. Nested scopes create a scope tree or scope chain.",
    second: "We can create variables with the let, const, and var declarations. For let and const, block scoping works as explained above. However, var behaves differently.",
    third: "let and const create block-scoped variables. When declared within a block, they are only accessible within that block.",
    forth: "Variables created with var are scoped to their nearest function or the global scope (which we will discuss shortly). They are not block scoped.",
    fifth: "In a web browser, the global scope is at the top level of a script. It is the root of the scope tree that we described earlier, and it contains all other scopes. Thus, creating a variable in the global scope makes it accessible in every scope"
  }]
 
  var hoisting = [{
    head: "Hoissting",
    first: "Conceptually variable hoisting is often presented as the interpreter 'splitting variable declaration and initialization, and moving (just) the declarations to the top of the code'",
    second: "Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.",
    third: "Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.",
    forth: "An exception will be thrown if a variable declared with let or const is read before it is initialized.",
    fifth: "JavaScript in strict mode does not allow variables to be used if they are not declared. Study 'use strict' in the next chapter."
  }]
  
  var constuct = [{
    head: "Constructor Functions",
    first: "It is considered a good practice to capitalize the first letter of your constructor function.",
    second: "Two objects are created using the same constructor function.",
    third: "In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created.",
    forth: "we can passed arguments to the constructor function during the creation of the object.",
    fifth: "You should not declare strings, numbers, and boolean values as objects because they slow down the program."
  }]
  
  var prototype = [{
    head: "Prototype",
    first: "In JavaScript, every function and object has a property named prototype by default.",
    second: "In the above example, we are trying to access the prototype property of a constructor function. Since the prototype property has no value at the moment, it shows an empty object.",
    third:"Prototype is used to provide additional property to all the objects created from a constructor function.",
    forth: "If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value.",
    fifth: "If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function."
  }]
  
  localStorage.setItem('scope', JSON.stringify(Scope));
  localStorage.setItem('hoisting', JSON.stringify(hoisting));
  localStorage.setItem('construct', JSON.stringify(constuct));
  localStorage.setItem('prototype', JSON.stringify(prototype));

  var localScope = JSON.parse(localStorage.getItem('scope')) || Scope;
  var localHoisting = JSON.parse(localStorage.getItem('hoisting')) || hoisting;
  var localConstruct = JSON.parse(localStorage.getItem('construct')) || constuct; 
  var localPrototype = JSON.parse(localStorage.getItem('prototype')) || prototype;
  

  function bulletPoints(data){
      document.querySelector('.show').innerHTML = "";
    var box = document.createElement('ul');
    
    var heading = document.createElement('h1');
    heading.innerText = `${data.head}`;

    var fPera = document.createElement('li');
    fPera.innerText = `${data.first}`;

    var sPera = document.createElement('li');
    sPera.innerText = `${data.second}`;

    var tPera = document.createElement('li');
    tPera.innerText = `${data.third}`;
    
    var fPera = document.createElement('li');
    fPera.innerText = `${data.forth}`;
    
    var fiPera = document.createElement('li');
    fiPera.innerText = `${data.fifth}`;
    
    box.append(heading, fPera, sPera, tPera, fPera, fiPera);
    document.querySelector('.show').append(box);
  }

  document.querySelector('#scope').addEventListener('click', ()=>{
      bulletPoints(localScope[0]);

  })
  document.querySelector('#hoisting').addEventListener('click', ()=>{
      bulletPoints(localHoisting[0]);

  })
  document.querySelector('#constructFunction').addEventListener('click', ()=>{
      bulletPoints(localConstruct[0]);

  })
  document.querySelector('#prototype').addEventListener('click', ()=>{
      bulletPoints(localPrototype[0]);

  })