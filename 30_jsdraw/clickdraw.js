/*
TOOLBOX:
clearRect()
getElementbyID()
addEvenetListener()
fillStyle()
strokeStyle()
clearCircle()
fillText()
beginPath()
fillStyle
arc()
fill()
stroke()
Math.PI
offsetX
offsetY
clientWidth
clientHeight
*/

var c = getElementbyID("slate");

var ctx = c.getContext("2d");

var mode = "rect";


  var toggleMode = (e) => {
  console.log("toggling...");
  if (mode = "rect"){
  	mode = "circle";
  	b = getElementbyID("buttonToggle");
  	console.log(b);
  	getElementbyID("buttonToggle").innerHTML = "circle";
  }
  else {
  	mode = "rect";
  	getElementbyID("buttonToggle").innerHTML = "rect";
  }
  }
var drawRect = function(e) {
  var mouseX = offsetX;
  var mouseY = offsetY;
  console.log("mouseclick registered at ", mouesX, mouseY);
}

var drawCircle = (e) => {
	canvas.arc(offsetX,offsetY,5);
  	console.log("mouseclick registered at ", mouseX, mouseY);

}

var draw = (e) => {

}

var wipeCanvas = () => {

}

c.addEventListener("click", draw);
varbToggler = document. ;
bToggler ;
var clearB = ;
clearB.;Í
