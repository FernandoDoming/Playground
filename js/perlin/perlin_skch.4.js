const dt = 0.05;
const scale = 20;
let cols, rows;
let zoff = 0;

const WIDTH3 = 1200;
const HEIGHT3 = 1200;
const PART_COUNT = 10000;

let particles = [];
let flowfield = [];

function setup() {
    cnv = createCanvas(WIDTH3, HEIGHT3);
    cnv.parent('4');
    pixelDensity(1);
    colorMode('HSB');

    for(let i = 0; i < PART_COUNT; i++) {
        particles[i] = new Particle();
    }

    cols = floor(WIDTH3 / scale);
    rows = floor(HEIGHT3 / scale);
    flowfield = new Array(cols * rows);

    background(255);
}

function draw() {
	for (let x = 0; x < rows; x+=1) {
		for (let y = 0; y < cols; y+=1) {
            const index = x + y * cols;
            const angle = 2 * TWO_PI * noise(dt * x, dt * y, zoff);
            const v = p5.Vector.fromAngle(angle);

            v.setMag(3);
            flowfield[index] = v;
        }		
    }

    for(let i = 0; i < PART_COUNT; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
    }
    zoff += dt;
}