function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(180, 210, 255);

  drawMountains(0.005, 200, color(80, 120, 80));
  drawMountains(0.01, 250, color(60, 100, 60));
  drawMountains(0.02, 300, color(40, 80, 40));
}

function drawMountains(noiseScale, baseHeight, col) {
  stroke(50);
  fill(col);

  beginShape();
  let xoff = random(1000);
  for (let x = 0; x <= width; x++) {
    let y = noise(xoff) * 100 + baseHeight;
    vertex(x, y);
    xoff += noiseScale;
  }

  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
