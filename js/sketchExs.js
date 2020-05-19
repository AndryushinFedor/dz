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
let circles = 14;
let radius = 100;
let numSpacing = radius * 0.25;
let speed = 0.001;

function draw() {
  background('#FFCC48');

  for (let i = 0; i < circles; i++) {
    push();
    translate(width / 2, height / 2);
    createCircle({
      radius: radius + numSpacing * i,
      numsAmount: radius / 2 + i,
      seed: i
    });
    pop();
  }
}

function createCircle({
  radius,
  numsAmount,
  seed
}) {
  randomSeed(seed);
  let numAngle = 2 * PI / numsAmount;
  let nums = [];
  for (let i = 0; i < numsAmount; i++) {
    nums.push(int(random(2)));
  }
  rotate(frameCount * numsAmount * speed);
  push();
  for (let i = 0; i < numsAmount; i++) {
    push();
    // rotate(frameCount * i * numAngle * 0.005);
    // Двигаем число по кругу 
    rotate(i * numAngle);
    // Отодвигаем от центра на радиус
    translate(0 + radius, 0);
    // Поворачиваем каждое число на 90 градусов
    rotate(PI / 2);
    fill(255 / seed + seed);
    text(nums[i], 0, 0);
    pop();
  }
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// 