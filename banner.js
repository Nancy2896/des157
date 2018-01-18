var x;
var y;
var r;
let L = [];
var _X;
var _Y;

function setup(){

 var myCanvas = createCanvas(900,400);
 myCanvas.parent('banner');


 for(let i=0; i< 100 ; i++){

L [i]= new Lines (mouseX, mouseY, 30);
 }

}


function draw(){

for(let i=0; i<2; i++){
L[i].display();
//L[i].move();
}
}


class Lines {

constructor(x, y, r) {

  this.x = x;
    this.y = y;
      this.r = r;
}

  // var range = _r;

   // num = (random(10,20))

move(){

  this.x=  this.x + random(-this.r, this.r);
   this.y= this.y + random(-this.r, this.r);

}

display (){

  strokeWeight(random(7));
  stroke(0, random(140,220),random(150, 220));

  line(mouseX, 0, mouseX, height);
   line(0,mouseY, width, mouseY);


}
}
