let dots = [];
let count;
let cellSize = 60;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("canvas");
  
  let xCellsCount = width / cellSize;
  let yCellsCount = height / cellSize;
  count = xCellsCount * yCellsCount;

  for (let yCount = 0; yCount < yCellsCount; yCount++) {
    for (let xCount = 0; xCount < xCellsCount; xCount++) {
      dots.push(
        createDot({
          xCount,
          yCount,
          cellSize
        })
      )
    }
  }
}

function draw() {
  background('FFCC48');
  
  push();
  translate(- width / 2, - height / 2)
  for (let i = 0; i < count; i++) {
    dots[i].move();
    dots[i].display();
  }
  pop();
  
  push();
  
  pop();
}

function createDot({
  xCount,
  yCount,
  cellSize,
  d = 12,
  speed = random(0.04, 2)
}) {
  let paddingX = cellSize / 2;
  let paddingY = cellSize / 2;
  let velocity = speed * 1.2;
  let directionX = 1;
  let directionY = 1;

  return {
    move() {
      paddingX = paddingX + speed * directionX;
      if (paddingX >= cellSize || paddingX <= 0) {
        directionX *= -1;
        paddingX = paddingX + velocity * directionX;
        paddingY = paddingY + velocity * directionY;
      }
      if (paddingY >= cellSize || paddingY <= 0) {
        directionY *= -1;
        paddingY = paddingY + velocity * directionY;
      }
    },
    display() {
      let x = xCount * cellSize + paddingX;
      let y = yCount * cellSize + paddingY;
      
      fill(random(0, 255), random(0, 255), random(0, 255));
      noStroke();
      ellipse(x, y, d);
      
      if (mouseIsPressed) {
        noFill();
        stroke(55, 50);
        rect(x - paddingX, y - paddingY, cellSize, cellSize);
        push();
        translate(- cellSize / 5, - cellSize / 5)
        noFill();
        stroke(55, 50);
        rect(x, y, 2 * d, 2 * d);
        pop();
        
        fill(55);
        noStroke();
        ellipse(x, y, d);

        // stroke(255, 50);
        // line(mouseX, mouseY, x, y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}




// 