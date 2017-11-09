let t1 = 0;
const dt = 0.01;

const HEIGHT = 600;
const WIDTH = 1200;

function setup() {
    cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent('1');
    colorMode('HSB');
}

function draw() {
    background(51);
    let xoff = t1;

    stroke(255);
    noFill();
    beginShape();
    for (let x = 0; x < WIDTH; x++) {
        let y = noise(xoff) * HEIGHT;
        stroke(255);
        vertex(x, y);
        xoff += dt;
    }
    endShape();
    t1 += dt;

}