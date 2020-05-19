let ball = {
  x: 0,
  y: 0,
  xspeed: 10,
  yspeed: 8
}

function setup() {
 let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background('#FFCC48');
}

function draw() {
  fill(202, 260, 202, 25);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  display()
  move()
  bounce()
}

function display() {
  noStroke()
  fill(255, 100, 20, random(0, 255));
  ellipse(ball.x, ball.y, 150, 150);
}

function move() {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y + ball.yspeed
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// 