var c = document.getElementById("slate");
var dotButton = document.getElementById("start");
var stopButton = document.getElementById("stop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")

  // YOUR CODE HERE
};


var radius = 5;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  ctx.clearRect(0,0,c.width,c.height); //get rid of the old circle
  //console.log("drawDot invoked..."); helpful log info
  //console.log(requestID);
  window.cancelAnimationFrame(requestID); //It's a bit odd, but the cancelling needs to happen before the redrawing, it'll work
  console.log(growing)
  //this just changes the size of the circle correctly
  if(radius >= 300 && growing === true){
    growing = false;
  }
  if(radius <= 0 && growing === false){
    growing = true;
  }
  if(growing === true){
    radius = radius + 1;
  }
  else{
    radius = radius - 1;
  }
  //console.log("radius: "+ radius)
  requestID = window.requestAnimationFrame(drawDot); //this gets the request ID for the cancelling frame from above. I don't entirely get it tho.
  //draws the circle
  ctx.beginPath();
  ctx.arc(300,300,radius,0,2 * Math.PI);
  ctx.fill();
  ctx.stroke();

};
//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );