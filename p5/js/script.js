var side = 2048;
var edge = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  var p5Canvas = createCanvas(side, side);
  p5Canvas.elt.style.width = edge + 'px';
  p5Canvas.elt.style.height = edge + 'px';
  for(var i = 0; i < TRIANGULATION.length; i+=3) {  
    beginShape();
    for(var j = 0; j < 3; j++) {
      var idx = TRIANGULATION[i + j] * 2;
      var x = textureMap[idx] * side;
      var y = textureMap[idx + 1] * side;
      vertex(x, y);
    }
    stroke('black');
    endShape();
  }
}

// function draw() {

// }
