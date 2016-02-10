//http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
//http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var totalSquares = 100;
var x = [Math.random()*25+1,Math.random()*99+1,Math.random()*56+1,Math.random()*99+1];
var y = [Math.random()*43+1,Math.random()*87+1,Math.random()*48+1,Math.random()*43+1];
var vx = [Math.random()*10+1,Math.random()*5+1,Math.random()*8+1,Math.random()*8+1];
var vy = [Math.random()*12+1,Math.random()*15+1,Math.random()*12+1,Math.random()*12+1];
var fric = .999;
var bgX = 1000;
var bgY = 1000;
var Color = [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()];
for(i=0;i<totalSquares + 1;i++){
x.push(Math.random()*25+1);
y.push(Math.random()*25+1);
vx.push(Math.random()*11+1);
vy.push(Math.random()*12+1);
Color.push(getRandomColor());
}


function draw(){
  
  //creates black background
ctx.fillStyle="#000000";
ctx.fillRect(0,0,bgX,bgY);
 

  for (i=0;i<x.length;i++)
  {
    //creates blue square  
ctx.fillStyle=Color[i];
ctx.fillRect(x[i],y[i],10,10);

  if(Math.abs(vx[i])<1 && Math.abs(vy[i])<1){
  vx[i]=(Math.random()-0.5)*10+1;
  vy[i]=(Math.random()-0.5)*12+1;
  //x[i]= Math.random()*200+1;
  //y[i]= Math.random()*300+1;
  }
    
  //wall logic
  if (x[i]>=bgX-10 || x[i]<=0) vx[i]=-vx[i];
  if (y[i]>=bgY-10 || y[i]<=0) vy[i]=-vy[i];
  vx[i]*=fric;
  vy[i]*=fric;
  x[i]+=vx[i];
  y[i]+=vy[i];
  
}
  
 
  
  

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

 function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}