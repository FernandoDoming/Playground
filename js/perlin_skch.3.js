const dt = 0.05;
const scale = 20;
let cols, rows;
let zoff = 0;

let WIDTH3 = 1200;
let HEIGHT3 = 1200;

function setup() {
    cnv = createCanvas(WIDTH3, HEIGHT3);
    cnv.parent('3');
    colorMode('HSB');
    pixelDensity(1);

    cols = floor(WIDTH3 / scale);
    rows = floor(HEIGHT3 / scale);
}

function draw() {
    background(255);

    
	for (let x = 0; x < rows; x+=1) {
		for (let y = 0; y < cols; y+=1) {
            let angle = TWO_PI * noise(dt * x, dt * y, zoff);
            let v = p5.Vector.fromAngle(angle);

            stroke(0);
            push();
            translate(x * scale, y * scale);
            rotate(v.heading());
            line(0, 0, scale, 0);
			pop();
        }		
    }
    zoff += dt;
}