function setup() {
  createCanvas(600, 600);
  frameRate(60);
}

const size = 60;
const divider = 20;
const numRows = 10;
const numCols = 10;

let counter = 0;

function draw() {
  background(255);
  noStroke();
  fill(0);

  const originalY = 200;

  //  noiseSeed(0);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter += 0.01;
}
