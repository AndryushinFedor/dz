
function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("canvas");

}
let ball = {
  x: 90,
  y: 80,
  xspeed: 1,
  yspeed: -2,
}
let ball2 = {
  x: 60,
  y: 70,
  xspeed: 2,
  yspeed: 3,
}


function draw() {
  background('#68DBFF');
  //   earth
  fill('#C6FF68')
  noStroke()
  //   sun
  fill('#FFD600')
  ellipse(width - mouseX, 300, 300, 300)
  //   cloud

  //   ball-1
  display()
  move()
  bounce()
  //   ball-2
  display2()
  move2()
  bounce2()
}

function display() {
  fill('#AD00FF')
  ellipse(ball.x, ball.y, 135, 135)
}

function move() {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y - ball.yspeed
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display2() {
  fill('#FED535')
  ellipse(ball2.x, ball2.y, 85, 85)
}

function move2() {
  ball2.x = ball2.x + ball2.xspeed
  ball2.y = ball2.y - ball2.yspeed
}

function bounce2() {
  if (ball2.x > width || ball2.x < 0) {
    ball2.xspeed = ball2.xspeed * -1;
  }
  if (ball2.y > height || ball2.y < 0) {
    ball2.yspeed = ball2.yspeed * -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}




// 