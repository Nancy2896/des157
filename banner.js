var X;
var Y;
var L;
var _r;
var _X;
var _Y;

function setup(){

 var myCanvas = createCanvas(900,400);
 myCanvas.parent('banner');

}
function draw(){

L.Lines (mouseX, mouseY, 30);
L.display();

}

function Lines (_X, _Y, _r){


   var range = _r;
   X= _X + random(-range, range);
    Y= _Y + random(-range, range);
   // num = (random(10,20));



this.display = function(){

  strokeWeight(random(7));
  stroke(0, random(140,220),random(150, 220));

  line(X,0, X, 400);
   line(0,Y, 900, Y);

}
}
