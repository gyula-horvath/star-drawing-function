var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function filledStar(x, y, a){
  
  var borderColor = 'transparent';
  var triangleColor = 'rgba(255, 102, 161, 0.7)'

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + a*0.25 , y);
  context.lineTo(x + a*0.375,y - a*0.3);
  context.lineTo(x + a*0.5, y);
  context.lineTo(x + a*0.75, y);
  context.lineTo(x + a*0.55, y + a*0.13);
  context.lineTo(x + a*0.65, y + a*0.45);
  context.lineTo(x + a*0.375, y + a*0.25);
  context.lineTo(x + a*0.1, y + a*0.45);
  context.lineTo(x + a*0.2, y + a*0.13);
  context.closePath()
  context.strokeStyle = borderColor;
  context.stroke();
  context.fillStyle = triangleColor;
  context.fill();
}

filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);