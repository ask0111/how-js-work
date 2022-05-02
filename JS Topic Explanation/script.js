// Five Quetions
// Scope
// Hoisting
// Constructor Functions
// local Storage
// Closures



// Scope Variable
// let y = 23;
// if(true){
//     let y =2;
//     console.log(y);
// }
// console.log(y);



// Hoisting
// display();
// console.log(x);

// var x = 3;

// function display(){
//     console.log("Hello, Sir")
// }





// Constructor Functions
// function Mobile(modal_no){

//     this.modal = modal_no;

//     this.price = function(){
//         console.log("Modal Number Is " + this.modal);
//     };
// }
// var samsung = new Mobile('Galaxy');
// var nokiya = new Mobile(3310);

// samsung.price();
// // nokiya.price();




// local Storage
// var data =[ 
//     {
//         name: "Atul",
//         email: "atul_masai@masai.school",
//     },
//     {
//         name: "nilesh",
//         email: "nilesh_masai@masai.school",
//     }
// ]

// localStorage.setItem("localStorageKey", JSON.stringify(data));

// var localData = JSON.parse(localStorage.getItem("localStorageKey"));
// console.log(localData);




// Closure
function makeFunc() {
    var name = 'Mozilla';
    function displayName(name) {
      console.log(name);
    }
      console.log(name);
    return displayName;
  }
  
  var myFunc = makeFunc();
  
   myFunc("Sachin");
  