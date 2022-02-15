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
  b = document.getElementById("buttonToggle");
  if (mode === "rect"){
  	mode = "circle";
  	console.log(b);
  	b.innerHTML = "circle";
  }
  else {
    console.log(b);
  	mode = "rect";
  	b.innerHTML = "rect"; //the button will show rect now
  }
  }
var drawRect = function(e) {

  ctx.fillRect(e.offsetX, e.offsetY, 50, 90);
}

var drawCircle = (e) => {
  ctx.beginPath();
	ctx.arc(e.offsetX,e.offsetY,30,0,2 * Math.PI);
  ctx.fill();
  ctx.stroke();

}

var draw = (e) => {
  if(mode === "rect"){
    drawRect(e);
  }
  else{
    drawCircle(e);
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
