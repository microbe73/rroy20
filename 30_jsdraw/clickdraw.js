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


var c = document.getElementById("slate");

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
  	getElementbyID("buttonToggle").innerHTML = "rect"; //the button will show rect now
  }
  }
var drawRect = function(e) {
  var mouseX = 600 - c.offsetX; //x and y coordinates of the mouse hopefully
  var mouseY = 600 - c.offsetY;
  ctx.fillRect(mouseX, mouseY, 50, 90);
  console.log("mouseclick registered at ", mouseX, mouseY);
}

var drawCircle = (e) => {
	ctx.ellipse(ctx.offsetX,ctx.offsetY,20,20,0,0,2 * Math.PI);
  ctx.fill();
  console.log("mouseclick registered at ", mouseX, mouseY);

}

var draw = (e) => {
  if(mode = "rect"){
    drawRect();
  }
  else{
    drawCircle();
  }
}

var wipeCanvas = () => {
  ctx.clearRect(0,0,c.width,c.height);
}

c.addEventListener("click", draw);
var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode);
var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
