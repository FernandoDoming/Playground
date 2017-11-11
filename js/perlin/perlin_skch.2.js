const dt = 0.01;
const scale = 20;
let cols, rows;

let WIDTH3 = 800;
let HEIGHT3 = 800;

function setup() {
    cnv = createCanvas(WIDTH3, HEIGHT3);
    cnv.parent('3');
    colorMode('HSB');
    pixelDensity(1);

    cols = floor(WIDTH3 / scale);
    rows = floor(HEIGHT3 / scale);
}

function draw() {
	for (var x = 0; x < rows; x+=1) {
		for (var y = 0; y < cols; y+=1) {
			var c = 255 * noise(dt * x, dt * y);
			fill(c);
			rect(x * scale, y * scale, scale, scale);
		}		
  	}
}