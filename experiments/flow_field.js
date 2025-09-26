let pts = [];
const particles = 2000;
const smoothing = 0.001;
const velocity = 1;
let time = 0;

function setup() {
  createCanvas(800, 600);
  background(245, 200, 200);
  stroke(0, 20, 100);
  noFill();
  for (let i = 0; i < particles; i++) {
    pts.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  fill(245, 200, 200, 10);
  rect(0, 0, width, height);

  for (let p of pts) {
    const px = p.x,
      py = p.y;

    const nx = noise(p.x * smoothing, p.y * smoothing, time);
    const ny = noise(p.x * smoothing + 1000, p.y * smoothing + 1000, time);
    const vx = (nx - 0.5) * 2 * velocity;
    const vy = (ny - 0.5) * 2 * velocity;

    p.x += vx;
    p.y += vy;

    line(px, py, p.x, p.y);

    if (p.x < 0) p.x += width;
    if (p.x > width) p.x -= width;
    if (p.y < 0) p.y += height;
    if (p.y > height) p.y -= height;
  }
  time += 0.001;
}
