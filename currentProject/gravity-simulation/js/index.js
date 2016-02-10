/*
Useful resources:
  how to implement gravity (kinda strange way):
   http://codetheory.in/basics-of-implementing-gravity-with-html5-canvas/

*/




//Canvas variables
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



//Data Variables
var x = [600, 400, 100];
var y = [75, 400, 75];

var vx = [1,1,1];
var vy = [1,1,1];

var radius = [10,50,25];



//where visuals go
function draw() {
  //creates black background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 800, 800);

  //creates the white orbiting planet
  ctx.beginPath();
  ctx.arc(x[0], y[0], radius[0], 0, 2*Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  //Creates the red stationary star
  ctx.beginPath();
  ctx.arc(x[1], y[1], radius[1], 0, 2 *Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  
  //creates blue orbiting planet
  ctx.beginPath();
  ctx.arc(x[2], y[2], radius[2], 0, 2*Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  
  
  var theta = Math.atan2(y[1]-y[0],x[1]-x[0]);
  var theta1 = Math.atan2(y[1]-y[2],x[1]-x[2]);
  
  vx[0]+= 2 * Math.cos(theta);
  vy[0]+= 2 * Math.sin(theta);
  x[0]+= vx[0];
  y[0]+= vy[0];
  
  vx[2]+= 2 * Math.cos(theta1);
  vy[2]+= 2 * Math.sin(theta1);
  x[2]+= vx[2];
  y[2]+= vy[2];
  
  
  

  
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);