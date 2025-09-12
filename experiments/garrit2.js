function setup() {
  createCanvas(600, 600);
}

const size = 10;
const divider = 100;
const numRows = 60;
const numCols = 60;

function draw() {
  background(255);
  noStroke();
  fill(0);

  const originalY = 200;

  //  noiseSeed(0);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  noLoop();
}
