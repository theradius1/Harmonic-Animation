var periodOne = 200.0;
var periodTwo = 130.0;
var pointCount = 0;
var angle = 10.0;
var amplitude = 140;
let inc = 0.05;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  strokeWeight(1);
  stroke(10);
  translate(width/2, height/2);
  
  beginShape();
  for(var i = 0; i <pointCount; i++){
    angle = i /periodOne * TWO_PI;
    var y = cos(angle) * amplitude;
    
    angle = i /periodTwo * TWO_PI;
    var x = sin(angle) * amplitude;
    vertex(x,y);
    
    fill(y, x*2, random(200));
    ellipse(width/2, height/2, x*20, y*30);

    fill(200, 10, y+30, 200);
    ellipse(x+10, y+20, random(300));
    
    
    
    angle+=inc;
    
  }
  endShape();
  
  pointCount++;
}
