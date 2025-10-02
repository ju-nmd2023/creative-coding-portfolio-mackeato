function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    let t = y / height;
    stroke(lerpColor(color(20, 0, 40), color(0, 0, 80), t));
    line(0, y, width, y);
  }

  drawSun(width / 2, 130, 120);

  drawBars(0.3, 320, color(255, 80, 150, 100));
  drawBars(0.09, 360, color(80, 220, 255, 100));
  drawBars(0.03, 400, color(255, 200, 80, 100));
}

function drawBars(noiseScale, baseY, col) {
  let xoff = random(1000);
  noStroke();
  fill(col);

  for (let x = 0; x <= width; x += 6) {
    let h = noise(xoff) * 120;
    rect(x, baseY - h, 4, h);
    xoff += noiseScale;
  }
}

function drawSun(cx, cy, r) {
  noStroke();
  fill(255, 120, 60, 200);
  circle(cx, cy, r * 2);

  stroke(20, 10, 40);
  for (let y = -r; y <= r; y += 6) {
    let w = sqrt(max(0, r * r - y * y));
    strokeWeight(2);
    line(cx - w, cy + y, cx + w, cy + y);
  }
}
