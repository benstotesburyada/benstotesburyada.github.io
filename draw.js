
var x = 360;
var y = 360;
var xspeed = 90;
var yspeed = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
}

function draw() {
  background(random(50),random(50),random(50));

  var d = random(0,250);

  fill (random(0, 255), random(0, 255), random(0, 255));
  ellipse (x, y, d, d);

  x = x + xspeed;
  if (x > windowWidth || x < 0)  {
    xspeed = -xspeed;
  }
  y = y + yspeed;
  if (y > windowHeight || y < 0) {
    yspeed = -yspeed;
  }
}

var snd = new Audio("file.mp3"); // buffers automatically when created
snd.play();
