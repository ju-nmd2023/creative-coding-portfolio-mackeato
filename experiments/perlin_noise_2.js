function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(18, 24, 38);

  drawLightning(0.006, 140, color(120, 180, 255, 140));
  drawLightning(0.01, 200, color(160, 140, 255, 140));
  drawLightning(0.018, 260, color(255, 140, 200, 140));
}

function drawLightning(noiseScale, baseY, col) {
  stroke(col);
  strokeWeight(3);
  noFill();
  let xoff = random(1000);

  beginShape();
  for (let x = 0; x <= width; x++) {
    let y = baseY + (noise(xoff) - 0.5) * map(noiseScale, 0.006, 0.02, 120, 50);
    vertex(x, y);
    xoff += noiseScale;
  }
  endShape();

  stroke(red(col), green(col), blue(col), 70);
  strokeWeight(1.5);
  xoff = random(2000);
  beginShape();
  for (let x = 0; x <= width; x++) {
    let y = baseY + 6 + (noise(xoff) - 0.5) * 40;
    vertex(x, y);
    xoff += noiseScale * 0.9;
  }
  endShape();

  xoff = random(3000);
  beginShape();
  for (let x = 0; x <= width; x++) {
    let y = baseY - 6 + (noise(xoff) - 0.5) * 40;
    vertex(x, y);
    xoff += noiseScale * 2;
  }
  endShape();
}
