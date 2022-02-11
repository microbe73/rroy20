/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Phantom Tollbooth :: Rayat Roy, Sophie Liu
// SoftDev pd2
// K29 -- Getting more comfortable with the dev console and the DOM
// 2022-02-11t
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("a")

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
let fib = function(n) {
  if(n == 1){
    return 1;
  };
  if(n == 0){
    return 0;
};
  return fib(n-1)+fib(n-2);
};
let fact = function(n) {
  if(n==0){
    return 1;
};
  return n * fact(n-1);
};


let gcd = function(a,b) {
  if(a > b){
    if(a % b === 0){
      return b;
    }
    return gcd(b, a % b);
  }
  if(b > a){
    if(b % a === 0){
      return a;
    }
    return gcd(a, b % a);
  }
};


/*
document.getElementById(<ID>)
document.getElementsByClassName(<class>)
<button id="b">
var a = document.getElementById("b")
a.addEventListener(<EVENT>,<FUNCTION>)
'click',fxnname
document.createElement(<HTML TAG NAME>)
element.setAttribute(<NAME>,<VALUE>)
element.getAttribute(<NAME>)
*/
let b1 = document.getElementById('b');
console.log(b1)
var r = document.getElementById('result');

let fib_button = function(){
  r.innerHTML = fib(Math.floor(Math.random() * (8 - 1) + 1));
};
b1.addEventListener('click', fib_button);

let b2 = document.getElementById('b2');
console.log(b2)
let fact_button = function(){
  r.innerHTML = fact(Math.floor(Math.random() * (8 - 1) + 1));
};
b2.addEventListener('click', fact_button);

let b3 = document.getElementById('b3');
console.log(b3)
let gcd_button = function(){
  r.innerHTML = gcd(Math.floor(Math.random() * (800 - 1) + 1),Math.floor(Math.random() * (800 - 1) + 1));
};
b3.addEventListener('click', gcd_button);

