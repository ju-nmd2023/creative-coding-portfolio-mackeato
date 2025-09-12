let cols = 9;
let rows = 6;
let margin = 80;

function setup() {
  createCanvas(900, 700);
  background(248, 246, 242);
  noFill();
  strokeWeight(0.8);
  rectMode(CENTER);

  cellSize = (width - margin * 2) / cols;
  centerX = margin + cellSize / 2;
  centerY = height / 2 - (rows * cellSize) / 2 + cellSize / 2;

  draw();
  noLoop();
}

function draw() {
  for (let gridY = 0; gridY < rows; gridY++) {
    for (let gridX = 0; gridX < cols; gridX++) {
      const x = centerX + gridX * cellSize;
      const y = centerY + gridY * cellSize;

      const distance = dist(gridX, gridY, (cols - 1) / 2, (rows - 1) / 2);
      const reps = int(map(distance, 0, max(cols, rows) / 2, 10, 2));

      const orange = 0.5;
      for (let i = 0; i < reps; i++) {
        if (random() < orange) {
          stroke(215, 120, 45, 180);
        } else {
          stroke(40, 40, 50, 180);
        }

        push();
        translate(
          x + randomGaussian(0, cellSize * 0.05),
          y + randomGaussian(0, cellSize * 0.05)
        );
        rotate(random(-0.12, 0.12));
        const size = cellSize * random(0.7, 0.9);
        square(0, 0, size);
        pop();
      }
    }
  }
}
