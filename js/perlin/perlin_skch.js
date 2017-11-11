let t = 0;

const WIDTH  = 600;
const HEIGHT = 600;

function setup() {
    cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent('0');
    colorMode('HSB');
}

function draw() {
    background(51, 5);
    let x = noise(t) * WIDTH;
    let y = noise(t + 5) * HEIGHT;

    fill(x % 256, y % 256, 126);
    noStroke();
    ellipse(x, y, 25, 25);
    t += 0.01;
}