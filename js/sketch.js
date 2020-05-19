

function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    myCanvas.parent("canvas");
    background('#FFCC48');
    frameRate(60)
  }
  
  function draw() {
    background('#FFCC48');
    
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    
    for (let i = 0; i < 50; i++) {
      createBubble(0, 0, 10 * i + 10, random(1, 5), { r: random(0, 255), g: 0, b: random(0, 255) });
    }
  }
  
  function createBubble(x, y, d, s, col) {
    strokeWeight(2);
    noFill();
    stroke(col.r, col.g, col.b);
    ellipse(x + random(-3, 3), y + random(-3, 3), d);
  }

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}