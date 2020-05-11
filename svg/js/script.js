var NS = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(NS, "svg");
var side = 2048;
var edge = Math.min(window.innerWidth, window.innerHeight);
svg.setAttribute("viewBox", `0 0 ${side} ${side}`);
svg.setAttribute("width", `${side}px`);
svg.setAttribute("height", `${side}px`);
svg.style.width = edge + 'px';
svg.style.height = edge + 'px';
document.body.appendChild(svg);

for(var i = 0; i < TRIANGULATION.length; i+=3) {  
  var path = document.createElementNS(NS,'path');
  var d = '';
  for(var j = 0; j < 3; j++) {
    var idx = TRIANGULATION[i + j] * 2;
    var x = textureMap[idx] * side;
    var y = textureMap[idx + 1] * side;
    if(j === 0) {
      d += `M${x},${y} `
    } else {
      d += `L${x},${y} `
    }
  }
  d += 'Z';
  path.setAttribute('d', d);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'black');
  svg.appendChild(path);
}