var canvas = document.createElement('canvas');
var side = 2048;
var edge = Math.min(window.innerWidth, window.innerHeight);

canvas.width = side;
canvas.height = side;
document.body.appendChild(canvas);
canvas.style.width = edge + 'px';
canvas.style.height = edge + 'px';
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
for(var i = 0; i < TRIANGULATION.length; i+=3) {  
  ctx.beginPath();
  for(var j = 0; j < 3; j++) {
    var idx = TRIANGULATION[i + j] * 2;
    var x = textureMap[idx] * side;
    var y = textureMap[idx + 1] * side;
    if(j === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
  ctx.closePath();
}