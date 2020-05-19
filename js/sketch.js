let i = 0
let l = 0
let x1
let y1

function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
    background('#FFCC48');
    frameRate(60)
    x1 = width / 2
    y1 = height / 2
}

function draw() {
    i += 1
    createCircle(x1, y1, i)
    if (i > 20) {
        l += 1
        createCircle(x1, y1, l)
        if (l > 20) { l = 0 }
    }
    if (i > 40) { i = 0 }

    createCircle(mouseX, mouseY, 1)

    if (mouseIsPressed) {
        x1 = mouseX
        y1 = mouseY
    } else {
        x1 = width / 2
        y1 = height / 2
    }
}

function createCircle(x, y, a) {
    noFill()
    stroke(255)
    ellipse(x, y, a * 300)

    fill(51, 25, 65, 5);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}